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
import { useParams } from "react-router-dom";
import GameDetailSkeleton from "../components/GameDetailSkeleton";
import GameInfo from "../components/GameInfo";
import Title from "../components/Title";

export default function Game() {
	const params = useParams();
	const [game, setGame] = useState(null); // Initialize as null
	const [screenshots, setScreenshots] = useState(null); // Initialize as null

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

		fetchGame();
		fetchScreenshots();
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
				<div className="sm:container py-8 md:py-16">
					<div className="px-8 md:px-16">
						{game ? (
							<>
								<Title text={game.name} />
								<div className="text-sm">
									<div
										dangerouslySetInnerHTML={{ __html: game.description }}
										className="space-y-4 my-8"
									/>
									<GameInfo game={game} />
								</div>
							</>
						) : (
							<>
								<GameDetailSkeleton />
							</>
						)}
						{screenshots && (
							<>
								<span className="text-primary font-bold text-2xl">
									Screenshots
								</span>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
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
															<div className="flex flex-auto justify-between">
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
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
