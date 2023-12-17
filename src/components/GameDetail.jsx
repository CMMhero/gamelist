import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
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
									<AlertDialog key={screenshot.id}>
										<AlertDialogTrigger>
											<div className="w-full h-full md:h-28">
												<Image
													className="object-cover w-full h-full rounded-md"
													alt={`Screenshot ${screenshot.id}`}
													src={screenshot.image}
												/>
											</div>
										</AlertDialogTrigger>
										<AlertDialogContent className="rounded-lg w-[95%] sm:w-[75%] md:w-[60%] lg:w-[50%]">
											<AlertDialogHeader>
												<AlertDialogTitle>
													<div className="flex justify-between flex-auto">
														Screenshot
														<AlertDialogCancel>
															<AiOutlineClose />
														</AlertDialogCancel>
													</div>
												</AlertDialogTitle>
												<AlertDialogDescription>
													<Image
														src={screenshot.image}
														key={screenshot.id}
														className="w-full h-auto rounded-md"
														alt={`Screenshot ${screenshot.id}`}
													/>
												</AlertDialogDescription>
											</AlertDialogHeader>
										</AlertDialogContent>
									</AlertDialog>
								))}
							</div>
						</div>
					)}
					{trailers.length > 0 && (
						<div className="my-8">
							<span className="text-2xl font-bold text-primary">Trailers</span>
							<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
								{trailers.map((trailer) => (
									<Link
										to={trailer.data.max}
										target="_blank"
										key={trailer.id}
										rel="noopener noreferrer"
									>
										<Image
											className="rounded-md"
											src={trailer.preview}
											alt={trailer.name}
										/>
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
