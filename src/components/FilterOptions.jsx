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
		if (!value) {
			setSelectedValues(new Set());
			onFilterChange(Array.from(new Set()));
			return;
		}

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
						{title}
						{selectedValues.size > 0 && (
							<>
								<Separator orientation="vertical" className="h-4 mx-2" />
								<Badge
									variant="default"
									className="px-1 font-normal rounded-sm lg:hidden"
								>
									{selectedValues.size}
								</Badge>
								<div className="hidden space-x-1 lg:flex">
									{selectedValues.size > 1 ? (
										<Badge
											variant="default"
											className="px-1 font-normal rounded-sm"
										>
											{selectedValues.size} selected
										</Badge>
									) : (
										options
											.filter((option) => selectedValues.has(option.value))
											.map((option) => (
												<Badge
													variant="default"
													key={option.value}
													className="px-1 font-normal rounded-sm"
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
							{selectedValues.size > 0 && (
								<>
									<CommandGroup>
										<CommandItem
											onSelect={() => {
												setSelectedValues(new Set());
												handleSelect(null);
											}}
											className="justify-center text-center"
										>
											Clear filters
										</CommandItem>
									</CommandGroup>
									<CommandSeparator />
								</>
							)}
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
											<CheckIcon className="w-4 h-4" />
										</div>
										<span>{option.name}</span>
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
