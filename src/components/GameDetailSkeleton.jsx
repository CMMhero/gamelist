import { Skeleton } from "@/components/ui/skeleton";

export default function GameDetailSkeleton() {
	return (
		<>
			<div className="mb-8 w-fit self-center py-2">
				<Skeleton className="h-10 w-72" />
			</div>
			<div className="space-y-1 my-8">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
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
					<Skeleton className="h-4 w-16" />
					<Skeleton className="h-4 w-52" />
				</div>
				<div className="space-y-1">
					<Skeleton className="h-4 w-24" />
					<Skeleton className="h-4 w-48" />
				</div>
				<div className="space-y-1">
					<Skeleton className="h-4 w-24" />
					<Skeleton className="h-4 w-64" />
				</div>
				<div className="space-y-1">
					<Skeleton className="h-4 w-12" />
					<Skeleton className="h-20 w-full" />
				</div>
				<div className="space-y-1">
					<Skeleton className="h-4 w-20" />
					<Skeleton className="h-4 w-48" />
				</div>
			</div>
			<Skeleton className="h-8 w-40" />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
				<Skeleton className="h-40 w-full" />
				<Skeleton className="h-40 w-full" />
				<Skeleton className="h-40 w-full" />
				<Skeleton className="h-40 w-full" />
			</div>
		</>
	);
}
