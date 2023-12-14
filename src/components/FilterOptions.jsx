// DataTableFacetedFilter.jsx
import { CheckIcon } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export default function FilterOptions({ title, options, onFilterChange }) {
	const [selectedValues, setSelectedValues] = useState(new Set());

	const handleSelect = (value) => {
		const updatedValues = new Set(selectedValues);
		if (updatedValues.has(value)) {
			updatedValues.delete(value);
		} else {
			updatedValues.add(value);
		}

		setSelectedValues(updatedValues);
		onFilterChange(Array.from(updatedValues));
	};

	return (
		<div>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline" size="sm" className="h-10">
						{/* <PlusCircledIcon className="mr-2 h-4 w-4" /> */}
						{title}
						{selectedValues.size > 0 && (
							<>
								<Separator orientation="vertical" className="mx-2 h-4" />
								{/* ... (your existing badge logic) */}
								<Badge
									variant="secondary"
									className="rounded-sm px-1 font-normal lg:hidden"
								>
									{selectedValues.size}
								</Badge>
								<div className="hidden space-x-1 lg:flex">
									{selectedValues.size > 2 ? (
										<Badge
											variant="secondary"
											className="rounded-sm px-1 font-normal"
										>
											{selectedValues.size} selected
										</Badge>
									) : (
										options
											.filter((option) => selectedValues.has(option.value))
											.map((option) => (
												<Badge
													variant="secondary"
													key={option.value}
													className="rounded-sm px-1 font-normal"
												>
													{option.name}
												</Badge>
											))
									)}
								</div>
							</>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0" align="start">
					<Command>
						<CommandInput placeholder={title} />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup>
								{options.map((option) => (
									<CommandItem
										key={option.value}
										onSelect={() => handleSelect(option.value)}
									>
										<div
											className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary ${
												selectedValues.has(option.value)
													? "bg-primary text-primary-foreground"
													: "opacity-50 [&_svg]:invisible"
											}`}
										>
											<CheckIcon className="h-4 w-4" />
										</div>
										<span>{option.name}</span>
										{/* ... (your existing option content) */}
									</CommandItem>
								))}
							</CommandGroup>
							{selectedValues.size > 0 && (
								<>
									<CommandSeparator />
									<CommandGroup>
										<CommandItem
											onSelect={() => setSelectedValues(new Set())}
											className="justify-center text-center"
										>
											Clear filters
										</CommandItem>
									</CommandGroup>
								</>
							)}
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
