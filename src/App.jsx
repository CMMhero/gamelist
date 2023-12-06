import { useEffect, useRef, useState } from "react";
import GameCard from "./components/GameCard";

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
		<div className="w-full p-16 bg-zinc-900">
			<div className="container">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-slate-100">
					{games.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
				<div ref={loaderRef}></div>
				{loading && <p className="my-8 text-zinc-50">Loading...</p>}
			</div>
		</div>
	);
}

export default App;
