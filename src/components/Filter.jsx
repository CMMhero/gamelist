import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function Filter({ onChange }) {
	const handleSelectChange = (event) => {
		console.log("Selected value:", event.target.value);
		onChange && onChange(event.target.value);
	};
	
	return (
		<div className="mb-8 flex">
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Order By" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Order By</SelectLabel>
						<SelectItem value="name">Name</SelectItem>
						<SelectItem value="released">Date Released</SelectItem>
						<SelectItem value="popularity">Popularity</SelectItem>
						<SelectItem value="metacritic">Rating</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
