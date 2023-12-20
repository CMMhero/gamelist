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

import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

import { Grid2X2, Grid3X3, TableProperties } from "lucide-react";
import FilterOptions from "./FilterOptions";

export default function Filter({
	ordering,
	onFilterChange,
	onViewChange,
	onGenreChange,
	onPlatformChange,
	onStoreChange,
}) {
	const form = useForm();
	const [genres, setGenres] = useState(null);
	const [platforms, setPlatforms] = useState(null);
	const [stores, setStores] = useState(null);

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/genres?key=${
						import.meta.env.VITE_RAWG_API_KEY
					}`
				);
				const data = await response.json();
				setGenres(data.results);
			} catch (error) {
				console.error("Error fetching genres: ", error);
			}
		};

		const fetchPlatforms = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/platforms/lists/parents?key=${
						import.meta.env.VITE_RAWG_API_KEY
					}`
				);
				const data = await response.json();
				setPlatforms(data.results);
			} catch (error) {
				console.error("Error fetching platforms: ", error);
			}
		};

		const fetchStores = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/stores?key=${
						import.meta.env.VITE_RAWG_API_KEY
					}`
				);
				const data = await response.json();
				setStores(data.results);
			} catch (error) {
				console.error("Error fetching stores: ", error);
			}
		};

		fetchGenres();
		fetchPlatforms();
		fetchStores();
	}, []);

	function onSubmit(data) {
		console.log(data);
	}

	const handleFilterChange = (value) => {
		onFilterChange(value);
	};

	const handleGenreChange = (value) => {
		onGenreChange(value);
	};
	const handlePlatformChange = (value) => {
		onPlatformChange(value);
	};
	const handleStoreChange = (value) => {
		onStoreChange(value);
	};

	const handleViewChange = (value) => {
		localStorage.setItem("view", value);
		onViewChange(value);
	};

	return (
		<Card className="flex sticky left-0 top-[70px] z-50 p-4">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col justify-between w-full gap-4 lg:flex-row"
				>
					<div className="flex items-end gap-4 overflow-auto">
						<div>
							<FormField
								control={form.control}
								name="view"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Filters</FormLabel>
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
						<div>
							<FormField
								control={form.control}
								name="view"
								render={({ field }) => (
									<FormItem>
										<FilterOptions
											title="Platforms"
											options={
												platforms
													? platforms.map((option) => ({
															name: option.name,
															value: option.id,
													  }))
													: []
											}
											onFilterChange={(value) => {
												field.onChange(value);
												handlePlatformChange(value);
											}}
										/>
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
										<FilterOptions
											title="Stores"
											options={
												stores
													? stores.map((option) => ({
															name: option.name,
															value: option.id,
													  }))
													: []
											}
											onFilterChange={(value) => {
												field.onChange(value);
												handleStoreChange(value);
											}}
										/>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div className="flex justify-between gap-4">
						<div className="w-[160px]">
							<FormField
								control={form.control}
								name="ordering"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Order by</FormLabel>
										<Select
											onValueChange={(value) => {
												if (value == ordering) return;
												
												field.onChange(value);
												handleFilterChange(value);
											}}
											defaultValue={ordering}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder={ordering} />
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
						<div className="w-auto">
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
					</div>
				</form>
			</Form>
		</Card>
	);
}
