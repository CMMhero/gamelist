import { Skeleton } from "@/components/ui/skeleton";

export default function GameDetailSkeleton() {
	return (
		<>
			<div className="self-center py-2 mb-8 w-fit">
				<Skeleton className="h-10 w-72" />
			</div>
			<div className="grid grid-cols-9 text-sm gap-x-8">
				<div className="col-span-9 space-y-4 md:col-span-6">
					<div className="my-8">
						<Skeleton className="w-20 h-6 mb-2" />
						<div className="my-4 space-y-4">
							<div className="space-y-1">
								<Skeleton className="w-full h-4" />
								<Skeleton className="w-full h-4" />
								<Skeleton className="w-full h-4" />
								<Skeleton className="w-full h-4" />
								<Skeleton className="w-full h-4" />
							</div>
							<div className="space-y-1">
								<Skeleton className="w-full h-4" />
								<Skeleton className="w-full h-4" />
								<Skeleton className="w-full h-4" />
								<Skeleton className="w-full h-4" />
								<Skeleton className="w-full h-4" />
							</div>
						</div>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div className="space-y-1">
								<Skeleton className="w-24 h-4" />
								<Skeleton className="w-20 h-4" />
							</div>
							<div className="space-y-1">
								<Skeleton className="w-20 h-4" />
								<Skeleton className="h-4 w-52" />
							</div>
							<div className="space-y-1">
								<Skeleton className="w-16 h-4" />
								<Skeleton className="w-56 h-4" />
							</div>
							<div className="space-y-1">
								<Skeleton className="w-24 h-4" />
								<Skeleton className="w-6 h-4" />
							</div>
							<div className="space-y-1">
								<Skeleton className="w-16 h-4" />
								<Skeleton className="h-4 w-52" />
							</div>
							<div className="space-y-1">
								<Skeleton className="w-24 h-4" />
								<Skeleton className="w-48 h-4" />
							</div>
							<div className="space-y-1 md:col-span-2">
								<Skeleton className="w-12 h-4" />
								<Skeleton className="w-full h-12" />
							</div>
							<div className="space-y-1 md:col-span-2">
								<Skeleton className="w-20 h-4" />
								<Skeleton className="w-48 h-4" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-9 space-y-4 md:col-span-3">
					<div className="my-8">
						<Skeleton className="w-32 h-6 mb-2" />
						<div className="grid grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-2">
							<Skeleton className="w-auto h-10" />
							<Skeleton className="w-auto h-10" />
							<Skeleton className="w-auto h-10" />
							<Skeleton className="w-auto h-10" />
						</div>
					</div>
					<div className="my-8">
						<Skeleton className="h-6 mb-2 w-36" />
						<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
							<Skeleton className="w-full h-28" />
							<Skeleton className="w-full h-28" />
							<Skeleton className="w-full h-28" />
							<Skeleton className="w-full h-28" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
