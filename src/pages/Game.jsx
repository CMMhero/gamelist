import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameInfo from "../components/GameInfo";
import Title from "../components/Title";

export default function Game() {
	const params = useParams();
	const [game, setGame] = useState([]);

	useEffect(() => {
		const fetchGames = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games/${params.id}?key=dc6f3f19206d43078b51b87ab10705b1`
				);
				const data = await response.json();
				setGame(data);
				console.log(data);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};

		fetchGames();
	}, [params.id]);

	return (
		<>
			<NavBar />
			<div className="">
				<img
					className="w-full h-screen object-cover absolute z-[-1] opacity-10"
					src={game.background_image}
					alt={game.name}
				/>
			</div>
			<div className="sm:container py-8 md:py-16">
				<div className="px-8 md:px-16">
					<Title text={game.name} />
					<div className="text-sm">
						<div
							dangerouslySetInnerHTML={{ __html: game.description }}
							className="space-y-4 my-8"
						/>
						<GameInfo game={game} />
					</div>
				</div>
			</div>
		</>
	);
}
