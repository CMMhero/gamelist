import NavBar from "@/components/NavBar";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import GameDetailSkeleton from "../components/GameDetailSkeleton";
import GameInfo from "../components/GameInfo";
import Title from "../components/Title";

export default function Game() {
	const params = useParams();
	const [game, setGame] = useState(null); // Initialize as null
	const [screenshots, setScreenshots] = useState(null); // Initialize as null
	const [trailers, setTrailers] = useState(null); // Initialize as null

	useEffect(() => {
		const fetchGame = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games/${params.id}?key=dc6f3f19206d43078b51b87ab10705b1`
				);
				const data = await response.json();
				setGame(data);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};

		const fetchScreenshots = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games/${params.id}/screenshots?key=dc6f3f19206d43078b51b87ab10705b1`
				);
				const data = await response.json();
				setScreenshots(data.results);
				// console.log(data.results)
			} catch (error) {
				console.error("Error fetching screenshots: ", error);
			}
		};

		const fetchTrailers = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games/${params.id}/movies?key=dc6f3f19206d43078b51b87ab10705b1`
				);
				const data = await response.json();
				setTrailers(data.results);
				console.log(data.results);
			} catch (error) {
				console.error("Error fetching screenshots: ", error);
			}
		};

		fetchGame();
		fetchScreenshots();
		fetchTrailers();
	}, [params.id]);

	return (
		<>
			<NavBar />
			{game && (
				<img
					className="w-full h-screen object-cover absolute z-[-1] opacity-20"
					src={game.background_image}
					alt={game.name}
				/>
			)}
			<div className="w-full h-screen bg-gradient-to-b from-transparent from-5% via-background/90 via-20% to-background">
				<div className="py-8 sm:container md:py-16">
					<div className="px-8 md:px-16">
						{game && screenshots && trailers ? (
							<>
								<Title text={game.name} />
								<div className="grid grid-cols-9 gap-8 text-sm">
									<div className="col-span-9 gap-8 my-8 space-y-4 md:col-span-6">
										<span className="text-2xl font-bold text-primary">
											About
										</span>
										<div
											dangerouslySetInnerHTML={{ __html: game.description }}
										></div>
										<GameInfo game={game} />
									</div>
									<div className="col-span-9 gap-x-8 md:col-span-3">
										{screenshots && (
											<div className="my-8">
												<span className="text-2xl font-bold text-primary">
													Screenshots
												</span>
												<div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2">
													{screenshots.map((screenshot) => (
														<>
															<AlertDialog>
																<AlertDialogTrigger>
																	<img
																		src={screenshot.image}
																		key={screenshot.id}
																		className="w-full h-auto rounded-md"
																		alt={`Screenshot ${screenshot.id}`}
																		decoding="async"
																		loading="lazy"
																	/>
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
																			<img
																				src={screenshot.image}
																				key={screenshot.id}
																				className="w-full h-auto rounded-md"
																				alt={`Screenshot ${screenshot.id}`}
																				decoding="async"
																				loading="lazy"
																			/>
																		</AlertDialogDescription>
																	</AlertDialogHeader>
																</AlertDialogContent>
															</AlertDialog>
														</>
													))}
												</div>
											</div>
										)}
										{trailers && (
											<div className="my-8">
												<span className="text-2xl font-bold text-primary">
													Trailers
												</span>
												<div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2">
													{trailers.map((trailer) => (
														<>
															<Link
																to={trailer.data.max}
																key={trailer.id}
																target="_blank"
																rel="noopener noreferrer"
															>
																<img
																	className="rounded-md"
																	src={trailer.preview}
																	alt={trailer.name}
																	decoding="async"
																	loading="lazy"
																/>
															</Link>
														</>
													))}
												</div>
											</div>
										)}
									</div>
								</div>
							</>
						) : (
							<>
								<GameDetailSkeleton />
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
