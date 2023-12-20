import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameDetail from "../components/GameDetail";
import GameDetailSkeleton from "../components/GameDetailSkeleton";
import Image from "../components/Image";

export default function Game() {
	const params = useParams();
	const [game, setGame] = useState(null);
	const [screenshots, setScreenshots] = useState(null);
	const [trailers, setTrailers] = useState(null);
	const [stores, setStores] = useState(null);

	useEffect(() => {
		const fetchGame = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_RAWG_API_KEY}`
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
					`https://api.rawg.io/api/games/${params.id}/screenshots?key=${import.meta.env.VITE_RAWG_API_KEY}`
				);
				const data = await response.json();
				setScreenshots(data.results);
			} catch (error) {
				console.error("Error fetching screenshots: ", error);
			}
		};

		const fetchTrailers = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games/${params.id}/movies?key=${import.meta.env.VITE_RAWG_API_KEY}`
				);
				const data = await response.json();
				setTrailers(data.results);
			} catch (error) {
				console.error("Error fetching trailers: ", error);
			}
		};

		const fetchStores = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games/${params.id}/stores?key=${import.meta.env.VITE_RAWG_API_KEY}`
				);
				const data = await response.json();
				setStores(data.results);
			} catch (error) {
				console.error("Error fetching stores: ", error);
			}
		};

		setGame(null);
		setScreenshots(null);
		setTrailers(null);
		setStores(null);
		
		fetchGame();
		fetchScreenshots();
		fetchTrailers();
		fetchStores();
	}, [params.id]);

	return (
		<>
			{game && game.background_image ? (
				<Image
					className="w-full h-screen object-cover absolute z-[-1] opacity-25"
					src={game.background_image}
					alt={game.name}
				/>
			) : (
				<div className="w-full h-screen object-cover absolute z-[-1] opacity-25 bg-accent" />
			)}
			<NavBar />
			<div className="w-full h-screen bg-gradient-to-b from-transparent from-5% via-background/80 via-20% to-background">
				<div className="py-8 sm:container md:py-16">
					<div className="px-8 md:px-16">
						{game && screenshots && trailers && stores ? (
							<>
								<GameDetail game={game} screenshots={screenshots} trailers={trailers} stores={stores}/>
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
