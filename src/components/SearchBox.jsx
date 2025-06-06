import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

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

	const handleSearch = useCallback(async (query) => {
		if (!query) {
			setSearchResults([]);
			return;
		}
		setIsLoading(true);
		try {
			const response = await fetch(
				`https://api.rawg.io/api/games?key=${
					import.meta.env.VITE_RAWG_API_KEY
				}&search=${query}&page_size=10&search_precise`
			);
			const data = await response.json();
			setSearchResults(data.results || []);
		} catch (error) {
			console.error("Error fetching data: ", error);
			setSearchResults([]);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const debouncedSearch = debounce(handleSearch);

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

	const handleButtonClick = () => {
		setOpen(true);
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

			<CommandDialog className="rounded-lg" open={open} onOpenChange={setOpen}>
				<div className="flex items-center px-3 border-b">
					<Search className="w-4 h-4 opacity-50 shrink-0" />
					<Input
						placeholder="Search games"
						className={
							"flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
						}
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
											onPointerDown={() => {
												setOpen(false);
												setSearchQuery("");
											}}
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
														<div className="aspect-[1.5/1] object-cover w-8 sm:w-10 md:w-12 lg:w-16 rounded bg-secondary flex items-center text-center justify-center overflow-hidden"></div>
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
