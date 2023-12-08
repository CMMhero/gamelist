import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBox() {
	const [open, setOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

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

	useEffect(() => {
		// Fetch data based on searchQuery and update searchResults
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1&search=${searchQuery}&page_size=800000`
				);
				const data = await response.json();
				setSearchResults(data.results || []);
				console.log(data.results);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, [searchQuery]);

	const handleButtonClick = () => {
		setOpen(true);
	};

	return (
		<>
			<div className="w-full flex-1 md:w-auto md:flex-none">
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

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput
					placeholder="Search games"
					// value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<CommandList>
					{searchResults.length === 0 ? (
						<CommandEmpty>No results found.</CommandEmpty>
					) : (
						<CommandGroup heading="Results">
							{searchResults.map((result) => (
								<CommandItem key={result.id}>
									<Link to={`/game/${result.id}`}>{result.name}</Link>
								</CommandItem>
							))}
						</CommandGroup>
					)}
				</CommandList>
			</CommandDialog>
		</>
	);
}
