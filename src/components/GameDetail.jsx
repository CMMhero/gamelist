import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GameInfo from "./GameInfo";
import Image from "./Image";
import StoreLink from "./StoreLink";
import Title from "./Title";
export default function GameDetail({ game, stores, screenshots, trailers }) {
	return (
		<>
			<Title text={game.name} />
			<div className="grid grid-cols-9 text-sm gap-x-8">
				<div className="col-span-9 space-y-4 md:col-span-6">
					<div className="my-8">
						<span className="text-2xl font-bold text-primary">About</span>
						<div
							className="my-4 space-y-4"
							dangerouslySetInnerHTML={{ __html: game.description }}
						></div>
						<GameInfo game={game} stores={stores} />
					</div>
				</div>
				<div className="col-span-9 space-y-4 md:col-span-3">
					{game && (
						<div className="my-8">
							<span className="text-2xl font-bold text-primary">
								Available in
							</span>
							<div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
								{game.stores.length
									? game.stores.map((store, index) => (
											<StoreLink
												key={store.store.id}
												stores={stores}
												store={store}
												index={index}
											/>
									  ))
									: "-"}
							</div>
						</div>
					)}
					{screenshots.length > 0 && (
						<div className="my-8">
							<span className="text-2xl font-bold text-primary">
								Screenshots
							</span>
							<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
								{screenshots.map((screenshot) => (
									<>
										<div className="w-full h-full md:hidden">
											<Image
												src={screenshot.image}
												key={screenshot.id}
												className="w-full h-auto rounded-md"
												alt={`Screenshot ${screenshot.id}`}
											/>
										</div>
										<div className="hidden md:flex">
											<AlertDialog key={screenshot.id}>
												<AlertDialogTrigger>
													<div className="w-full h-auto">
														<Image
															src={screenshot.image}
															key={screenshot.id}
															className="w-full h-auto rounded-md object-cover"
															alt={`Screenshot ${screenshot.id}`}
														/>
													</div>
												</AlertDialogTrigger>
												<AlertDialogContent className="p-0 rounded-lg w-[75%] sm:w-[75%] md:w-[60%] lg:w-[50%] h-fit">
													<AlertDialogCancel className="w-full h-fit p-0 left-0 top-0">
														<Image
															src={screenshot.image}
															key={screenshot.id}
															className="w-full h-auto rounded-md object-cover"
															alt={`Screenshot ${screenshot.id}`}
														/>
													</AlertDialogCancel>
												</AlertDialogContent>
											</AlertDialog>
										</div>
									</>
								))}
							</div>
						</div>
					)}
					{/* {trailers.length > 0 && (
						<div className="my-8">
							<span className="text-2xl font-bold text-primary">Trailers</span>
							<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
								{trailers.map((trailer) => (
									<div
										key={trailer.id}
										className="w-full h-full rounded-md bg-background/50"
									>
										<iframe
											className="w-full h-fit object-cover rounded-md"
											key={trailer.id}
											src={trailer.data.max}
											allowFullScreen="true"
											autoPlay="false"
											title={trailer.id}
										/>
									</div>
								))}
							</div>
						</div>
					)} */}
				</div>
			</div>
		</>
	);
}
