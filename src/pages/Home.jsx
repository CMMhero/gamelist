import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import { GameCardSkeleton } from "../components/GameCardSkeleton";
import Title from "../components/Title";
export default function Home() {
	const size = 5;
	const [articles, setArticles] = useState([]);
	const [popularGames, setPopularGames] = useState([]);
	const [topGames, setTopGames] = useState([]);
	const [newGames, setNewGames] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await fetch(
					`https://www.gamespot.com/api/articles/?api_key=3a96b80dc9ffb7244341a2e26e85e920ab50e351&format=json`
				);
				const data = await response.json();
				setArticles(data.results);
				console.log(data);
			} catch (error) {
				console.error("Error fetching games: ", error);
			}
		};

		const fetchPopularGames = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1&page_size=${size}&ordering=popularity`
				);
				const data = await response.json();
				setPopularGames(data.results);
				// console.log(data);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};
		const fetchTopGames = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1&page_size=${size}&ordering=-metacritic`
				);
				const data = await response.json();
				setTopGames(data.results);
				// console.log(data);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};
		const fetchNewGames = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1&page_size=${size}&ordering=released`
				);
				const data = await response.json();
				setNewGames(data.results);
				console.log(data);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};

		// fetchArticles();
		fetchPopularGames();
		fetchTopGames();
		fetchNewGames();
	}, []);

	return (
		<>
			<NavBar />
			<div className="py-8 sm:container md:py-16">
				<div className="px-8 md:px-16">
					<Title text="H320 Gamelist" />
					<span className="font-semibold text-md">
						Find all the games.
					</span>
					<div className="mt-2">
						<Link to="/browse">
							<Button>Browse games</Button>
						</Link>
					</div>
					{/* Popular Games Section */}
					<div className="mt-8">
						<h2 className="text-xl font-semibold mb-4">Popular Games</h2>
						<div className="grid grid-rows-1 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
							{popularGames.map((game) => (
								<GameCard key={game.id} game={game} view="grid" />
							))}
							{!popularGames.length && (
								<>
									{Array.from({ length: size }).map((_, index) => (
										<GameCardSkeleton key={index} view="grid" />
									))}
								</>
							)}
						</div>
					</div>

					{/* Top Games Section */}
					<div className="mt-8">
						<h2 className="text-xl font-semibold mb-4">Top Games</h2>
						<div className="grid grid-cols-5 overflow-scroll gap-4">
							{topGames.map((game) => (
								<GameCard key={game.id} game={game} view="grid" />
							))}
							{!topGames.length && (
								<>
									{Array.from({ length: size }).map((_, index) => (
										<GameCardSkeleton key={index} view="grid" />
									))}
								</>
							)}
						</div>
					</div>

					{/* New Games Section */}
					<div className="mt-8">
						<h2 className="text-xl font-semibold mb-4">New Games</h2>
						<div className="grid grid-cols-5 overflow-scroll gap-4">
							{newGames.map((game) => (
								<GameCard key={game.id} game={game} view="grid" />
							))}
							{!newGames.length && (
								<>
									{Array.from({ length: size }).map((_, index) => (
										<GameCardSkeleton key={index} view="grid" />
									))}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
