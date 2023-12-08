import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
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
						<div className="flex">
							<div className="flex items-center flex-auto">
								<Skeleton className="w-4 h-4 rounded-md mr-1" />
								<Skeleton className="w-4 h-4 rounded-md mr-1" />
								<Skeleton className="w-4 h-4 rounded-md" />
							</div>
							<Skeleton className="w-6 h-5" />
						</div>
						<div className="flex"></div>
					</CardDescription>
				</CardHeader>
				<CardFooter>
					<div className="flex">
						<Skeleton className="w-12 h-5 mr-1 rounded-full" />
						<Skeleton className="w-12 h-5 rounded-full" />
					</div>
				</CardFooter>
			</Card>
		</>
	);
}
