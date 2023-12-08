import { useForm } from "react-hook-form";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
export default function Filter({ onFilterChange }) {
	const form = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	const handleValueChange = (value) => {
		onFilterChange(value); // Pass the selected value to the callback
	};

	return (
		<div className="flex">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-[160px]"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Order by</FormLabel>
								<Select
									onValueChange={(value) => {
										field.onChange(value);
										handleValueChange(value);
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
				</form>
			</Form>
		</div>
	);
}
