import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function GameCardSkeleton({ view }) {
	switch (view) {
		case "grid":
			return (
				<div className="flex flex-col gap-2">
					<Card className="aspect-[1.5/1] overflow-hidden">
						<Skeleton className="w-full h-full" />
					</Card>
					<Skeleton className="w-32 h-6" />
				</div>
			);
		case "cards":
			return (
				<>
					<Card className="w-full h-full overflow-hidden">
						<Skeleton className="aspect-video rounded-b-none rounded-t-lg" />
						<CardHeader>
							<CardTitle>
								<Skeleton className="w-full h-6 mb-1" />
								<Skeleton className="w-32 h-6" />
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-1">
								<div className="flex">
									<div className="flex items-center flex-auto">
										<Skeleton className="w-4 h-4 rounded-md mr-1" />
										<Skeleton className="w-4 h-4 rounded-md mr-1" />
										<Skeleton className="w-4 h-4 rounded-md" />
									</div>
									<Skeleton className="w-6 h-5" />
								</div>
								<div className="flex">
									<Skeleton className="w-12 h-5 mr-1 rounded-full" />
									<Skeleton className="w-12 h-5 rounded-full" />
								</div>
							</div>
						</CardContent>
					</Card>
				</>
			);
		case "list":
			return (
				<>
					<Card className="w-full h-full overflow-hidden">
						<div className="flex p-4">
							<div className="flex gap-4">
								<Skeleton className="h-20 aspect-square md:h-16 md:aspect-video overflow-hidden rounded-lg" />
								<div className="flex gap-2 flex-col">
									<CardTitle>
										<Skeleton className="w-full h-6" />
									</CardTitle>
									<CardDescription>
										<div className="flex flex-col md:flex-row gap-2">
											<div className="flex space-y-1">
												<Skeleton className="w-12 h-5 mr-1 rounded-full" />
												<Skeleton className="w-12 h-5 mr-1 rounded-full" />
												<Skeleton className="w-12 h-5 rounded-full" />
											</div>
											<div className="flex items-center gap-2">
												<Skeleton className="w-4 h-4 rounded-md" />
												<Skeleton className="w-4 h-4 rounded-md" />
												<Skeleton className="w-4 h-4 rounded-md" />
												<Skeleton className="w-4 h-4 rounded-md" />
												<Skeleton className="w-6 h-5" />
											</div>
										</div>
									</CardDescription>
								</div>
							</div>
						</div>
					</Card>
				</>
			);
	}
}
