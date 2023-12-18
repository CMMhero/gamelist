import { Skeleton } from "@/components/ui/skeleton";

export default function GameDetailSkeleton() {
	return (
		<>
			<div className="mb-8 w-fit self-center py-2">
				<Skeleton className="h-10 w-72" />
			</div>
			<div className="grid grid-cols-9 text-sm gap-x-8">
				<div className="col-span-9 space-y-4 md:col-span-6">
					<div className="my-8">
						<Skeleton className="h-6 w-20 mb-2" />
						<div className="space-y-4 my-4">
							<div className="space-y-1">
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
							</div>
							<div className="space-y-1">
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
							</div>
						</div>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div className="space-y-1">
								<Skeleton className="h-4 w-24" />
								<Skeleton className="h-4 w-20" />
							</div>
							<div className="space-y-1">
								<Skeleton className="h-4 w-20" />
								<Skeleton className="h-4 w-52" />
							</div>
							<div className="space-y-1">
								<Skeleton className="h-4 w-16" />
								<Skeleton className="h-4 w-56" />
							</div>
							<div className="space-y-1">
								<Skeleton className="h-4 w-24" />
								<Skeleton className="h-4 w-6" />
							</div>
							<div className="space-y-1">
								<Skeleton className="h-4 w-16" />
								<Skeleton className="h-4 w-52" />
							</div>
							<div className="space-y-1">
								<Skeleton className="h-4 w-24" />
								<Skeleton className="h-4 w-48" />
							</div>
							<div className="space-y-1 md:col-span-2">
								<Skeleton className="h-4 w-12" />
								<Skeleton className="h-12 w-full" />
							</div>
							<div className="space-y-1 md:col-span-2">
								<Skeleton className="h-4 w-20" />
								<Skeleton className="h-4 w-48" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-9 space-y-4 md:col-span-3">
					<div className="my-8">
						<Skeleton className="h-6 w-32 mb-2" />
						<div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
							<Skeleton className="h-10 w-auto" />
							<Skeleton className="h-10 w-auto" />
							<Skeleton className="h-10 w-auto" />
							<Skeleton className="h-10 w-auto" />
						</div>
					</div>
					<div className="my-8">
						<Skeleton className="h-6 w-36 mb-2" />
						<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
							<Skeleton className="h-28 w-full" />
							<Skeleton className="h-28 w-full" />
							<Skeleton className="h-28 w-full" />
							<Skeleton className="h-28 w-full" />
						</div>
					</div>
					{/* <div className="my-8">
						<Skeleton className="h-6 w-32" />
						<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
							<Skeleton className="h-28 w-full" />
							<Skeleton className="h-28 w-full" />
							<Skeleton className="h-28 w-full" />
							<Skeleton className="h-28 w-full" />
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}
