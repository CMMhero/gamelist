import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function GameCardSkeleton() {
	return (
		<>
			<Card className="cursor-pointer border-0 hover:scale-110 transition duration-500 w-full h-full">
				<Skeleton className="w-100 h-32 rounded-b-none rounded-t-lg" />
				<CardHeader>
					<CardTitle>
						<Skeleton className="w-full h-6 mb-1" />
						<Skeleton className="w-32 h-6" />
					</CardTitle>
					<CardDescription>
						<div className="flex items-center">
							<Skeleton className="w-5 h-5 mr-1" />
							<Skeleton className="w-8 h-5" />
						</div>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex">
						<Skeleton className="w-4 h-4 rounded-md mr-1" />
						<Skeleton className="w-4 h-4 rounded-md mr-1" />
						<Skeleton className="w-4 h-4 rounded-md" />
					</div>
				</CardContent>
				<CardFooter>
					<div className="flex">
						<Skeleton className="w-12 h-5 mr-1 rounded-full" />
						<Skeleton className="w-12 h-5 rounded-full" />
					</div>
				</CardFooter>
			</Card>
		</>

		// <div className="flex items-center space-x-4">
		// 	<Skeleton className="h-12 w-12 rounded-full" />
		// 	<div className="space-y-2">
		// 		<Skeleton className="h-4 w-[250px]" />
		// 		<Skeleton className="h-4 w-[200px]" />
		// 	</div>
		// </div>
	);
}
