import GameCard from "@/components/GameCard";
import { GameCardSkeleton } from "@/components/GameCardSkeleton";
import NavBar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [title, setTitle] = useState("Top Games");
	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [ordering, setOrdering] = useState("");
	const loaderRef = useRef(null);

	useEffect(() => {
		const fetchGames = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1&page=${page}&ordering=${ordering}`
				);
				const data = await response.json();
				setGames((prevGames) => [...prevGames, ...data.results]);
				setPage((prevPage) => prevPage + 1);
				console.log(data.results);
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
	}, [page, loading, ordering]);

	const handleOrderingChange = (newOrdering) => {
		setGames([]); // Clear existing games when changing ordering
		setPage(1); // Reset page to 1 when changing ordering
		setOrdering(newOrdering);
	};

	return (
		<>
			<NavBar />
			<div className="sm:container">
				<div className="px-8 md:px-16">
					<div className="bg-gradient-to-r to-fuchsia-500 from-cyan-500 bg-clip-text text-transparent my-8 w-fit self-center py-2">
						<h1 className="text-4xl font-bold">{title}</h1>
					</div>
					{/* <Filter onChange={handleOrderingChange} /> */}
					<select
						value={ordering}
						onChange={(e) => handleOrderingChange(e.target.value)}
					>
						<option value="">Default</option>
						<option value="name">Name</option>
						<option value="-released">Released (Descending)</option>
						{/* Add more options for other fields */}
					</select>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
						{games.map((game) => (
							<GameCard key={game.id} game={game} />
						))}
					</div>
					<div className="w-full h-[1px]" ref={loaderRef}></div>
					{loading && (
						<>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
								{Array.from({ length: 20 }).map((_, index) => (
									<GameCardSkeleton key={index} />
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}
