import { useForm } from "react-hook-form";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid2X2, Grid3X3, TableProperties } from "lucide-react";

export default function Filter({ onFilterChange, onViewChange }) {
	const form = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	const handleFilterChange = (value) => {
		onFilterChange(value); // Pass the selected value to the callback
	};

	const handleViewChange = (value) => {
		localStorage.setItem("view", value);
		onViewChange(value); // Pass the selected value to the callback
	};

	return (
		<div className="flex">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="gap-4 flex w-full justify-between"
				>
					<div className="w-[160px]">
						<FormField
							control={form.control}
							name="ordering"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Order by</FormLabel>
									<Select
										onValueChange={(value) => {
											field.onChange(value);
											handleFilterChange(value);
										}}
										defaultValue="popularity"
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Popularity" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="name">Name</SelectItem>
											<SelectItem value="released">Date Released</SelectItem>
											<SelectItem value="popularity">Popularity</SelectItem>
											<SelectItem value="-metacritic">Rating</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div>
						<FormField
							control={form.control}
							name="view"
							render={({ field }) => (
								<FormItem>
									<FormLabel>View</FormLabel>
									<ToggleGroup
										type="single"
										onValueChange={(value) => {
											if (value == "") return;
											field.onChange(value);
											handleViewChange(value);
										}}
										defaultValue={localStorage.getItem("view") || "grid"}
									>
										<ToggleGroupItem
											value="grid"
											aria-label="Grid view"
											className={`${
												field.value == "grid" ? "bg-accent" : "bg-transparent"
											}`}
										>
											<Grid3X3 />
										</ToggleGroupItem>
										<ToggleGroupItem
											value="cards"
											aria-label="Cards view"
											className={`${
												field.value == "cards" ? "bg-accent" : "bg-transparent"
											}`}
										>
											<Grid2X2 />
										</ToggleGroupItem>
										<ToggleGroupItem
											value="list"
											aria-label="List view"
											className={`${
												field.value == "list" ? "bg-accent" : "bg-transparent"
											}`}
										>
											<TableProperties />
										</ToggleGroupItem>
									</ToggleGroup>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</form>
			</Form>
		</div>
	);
}
