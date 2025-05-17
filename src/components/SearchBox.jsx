import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

// Custom debounce implementation
const debounce = (onChange) => {
	let timeout;
	return (e) => {
		const form = e.currentTarget.value;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			onChange(form);
		}, 1000);
	};
};

export default function SearchBox() {
	const [open, setOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [cachedGames, setCachedGames] = useState([]);

	// Fuse.js options for fuzzy search
	const fuseOptions = {
		keys: ["name"],
		threshold: 0.3,
		distance: 100,
	};

	// Initialize Fuse instance
	const fuse = new Fuse(cachedGames, fuseOptions);

	// Keyboard shortcut handler
	useEffect(() => {
		const down = (e) => {
			if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	// Modify the search handler to work with the new debounce
	const handleSearch = useCallback(
		(query) => {
			if (!query) {
				setSearchResults([]);
				return;
			}

			setIsLoading(true);
			try {
				if (cachedGames.length > 0) {
					const fuseResults = fuse.search(query);
					if (fuseResults.length > 0) {
						setSearchResults(fuseResults.map((result) => result.item));
						setIsLoading(false);
						return;
					}
				}

				fetch(
					`https://api.rawg.io/api/games?key=${
						import.meta.env.VITE_RAWG_API_KEY
					}&search=${query}&page_size=10&search_precise`
				)
					.then((response) => response.json())
					.then((data) => {
						const results = data.results || [];
						setCachedGames((prev) => {
							const newGames = results.filter(
								(game) => !prev.find((p) => p.id === game.id)
							);
							return [...prev, ...newGames];
						});
						setSearchResults(results);
					})
					.finally(() => {
						setIsLoading(false);
					});
			} catch (error) {
				console.error("Error fetching data: ", error);
				setSearchResults([]);
				setIsLoading(false);
			}
		},
		[cachedGames]
	);

	const debouncedSearch = useMemo(() => debounce(handleSearch), [handleSearch]);

	// Search effect
	useEffect(() => {
		debouncedSearch(searchQuery);
		return () => debouncedSearch.cancel();
	}, [searchQuery, debouncedSearch]);

	const handleButtonClick = () => {
		setOpen(true);
	};

	const handleSearchClose = () => {
		setOpen(false);
		setSearchQuery("");
		setSearchResults([]);
	};

	return (
		<>
			<div className="flex-1 w-full md:w-auto md:flex-none">
				<Button
					variant="outline"
					className="w-full md:w-[200px] justify-between"
					onClick={handleButtonClick}
				>
					Search games...
					<p className="text-sm text-muted-foreground">
						<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
							<span className="text-xs">⌘</span>S
						</kbd>
					</p>
				</Button>
			</div>

			<CommandDialog
				className="rounded-lg"
				open={open}
				onOpenChange={handleSearchClose}
			>
				<div className="flex items-center px-3 border-b">
					<Search className="w-4 h-4 opacity-50 shrink-0" />
					<Input
						placeholder="Search games"
						className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
						value={searchQuery}
						onChange={(e) => {
							setSearchQuery(e.target.value);
							debouncedSearch(e);
						}}
					/>
				</div>
				<CommandList>
					<CommandGroup heading="Results">
						{isLoading ? (
							<CommandItem>Loading...</CommandItem>
						) : (
							<>
								<CommandEmpty>No results found.</CommandEmpty>
								{searchResults.map((result) => (
									<Link to={`/game/${result.id}`} key={result.id}>
										<CommandItem
											className="cursor-pointer"
											onPointerDown={handleSearchClose}
										>
											<div className="flex items-center gap-2">
												<div>
													{result.background_image ? (
														<Image
															src={result.background_image}
															alt={result.name}
															className="aspect-[1.5/1] object-cover w-8 sm:w-10 md:w-12 lg:w-16 rounded"
														/>
													) : (
														<div className="aspect-[1.5/1] object-cover w-8 sm:w-10 md:w-12 lg:w-16 rounded bg-secondary flex items-center text-center justify-center overflow-hidden" />
													)}
												</div>
												{result.name}
											</div>
										</CommandItem>
									</Link>
								))}
							</>
						)}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
