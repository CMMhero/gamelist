import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useRef, useState } from "react";
import GameCard from "./components/GameCard";
import { GameCardSkeleton } from "./components/GameCardSkeleton";

function App() {
	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const loaderRef = useRef(null);

	useEffect(() => {
		const fetchGames = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1&page=${page}`
				);
				const data = await response.json();
				setGames((prevGames) => [...prevGames, ...data.results]);
				setPage((prevPage) => prevPage + 1);
			} catch (error) {
				console.error("Error fetching games: ", error);
			} finally {
				setLoading(false);
			}
		};

		const handleObserver = (entries) => {
			const target = entries[0];
			if (target.isIntersecting && !loading) {
				fetchGames();
			}
		};

		const observer = new IntersectionObserver(handleObserver, {
			threshold: 0.5,
		});
		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}

		return () => observer.disconnect();
	}, [page, loading]);

	// const chunkArray = (arr, size) => {
	// 	const chunkedArray = [];
	// 	for (let i = 0; i < arr.length; i += size) {
	// 		chunkedArray.push(arr.slice(i, i + size));
	// 	}
	// 	return chunkedArray;
	// };

	// const shuffleArray = (arr) => {
	// 	const shuffledArray = [...arr];
	// 	for (let i = shuffledArray.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[shuffledArray[i], shuffledArray[j]] = [
	// 			shuffledArray[j],
	// 			shuffledArray[i],
	// 		];
	// 	}
	// 	return shuffledArray;
	// };

	console.log(games);

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="p-16 bg-accent">
				<div className="container">
					<div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent my-8 w-fit self-center">
						<h1 className="text-4xl font-bold">H320 GameList</h1>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-zinc-100">
						{games.map((game) => (
							<GameCard key={game.id} game={game} />
						))}
					</div>
					<div ref={loaderRef}></div>
					{loading && (
						<>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 my-8 text-zinc-100">
								{Array.from({ length: 20 }).map((_, index) => (
									<GameCardSkeleton key={index} />
								))}
							</div>
							<div className="text-center mt-8 text-zinc-100">Loading</div>
						</>
					)}
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
