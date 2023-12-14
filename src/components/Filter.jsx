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

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

import { Grid2X2, Grid3X3, TableProperties } from "lucide-react";
import FilterOptions from "./FilterOptions";

export default function Filter({ onFilterChange, onViewChange }) {
	const form = useForm();
	const [genres, setGenres] = useState(null);

	useEffect(() => {
		const fetchGame = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/genres?key=dc6f3f19206d43078b51b87ab10705b1`
				);
				const data = await response.json();
				setGenres(data.results);
				// console.log(data.results);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};

		fetchGame();
	}, []);

	function onSubmit(data) {
		console.log(data);
	}

	const handleFilterChange = (value) => {
		onFilterChange(value); // Pass the selected value to the callback
	};

	const handleGenreChange = (value) => {
		console.log(value);
		// onFilterChange(value); // Pass the selected value to the callback
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
					<div className="flex gap-4">
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
										<FormLabel>Genres</FormLabel>
										<FilterOptions
											title="Genres"
											options={
												genres
													? genres.map((option) => ({
															name: option.name,
															value: option.slug,
													  }))
													: []
											}
											onFilterChange={(value) => {
												field.onChange(value);
												handleGenreChange(value);
											}}
										/>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div>
						<FormField
							control={form.control}
							name="view"
							render={({ field }) => (
								<FormItem>
									<FormLabel>View</FormLabel>
									<Tabs
										defaultValue={localStorage.getItem("view") || "grid"}
										onValueChange={(value) => {
											if (value == "") return;
											field.onChange(value);
											handleViewChange(value);
										}}
									>
										<TabsList className="grid w-full h-full grid-cols-3">
											<TabsTrigger value="grid">
												<Grid3X3 />
											</TabsTrigger>
											<TabsTrigger value="cards">
												<Grid2X2 />
											</TabsTrigger>
											<TabsTrigger value="list">
												<TableProperties />
											</TabsTrigger>
										</TabsList>
									</Tabs>
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
