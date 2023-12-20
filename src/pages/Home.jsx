import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import { GameCardSkeleton } from "../components/GameCardSkeleton";
export default function Home() {
	const size = 5;
	const [popularGames, setPopularGames] = useState([]);
	const [topGames, setTopGames] = useState([]);
	const [newGames, setNewGames] = useState([]);

	useEffect(() => {
		const fetchPopularGames = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${
						import.meta.env.VITE_RAWG_API_KEY
					}&page_size=${size}&ordering=popularity`
				);
				const data = await response.json();
				setPopularGames(data.results);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};
		const fetchTopGames = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${
						import.meta.env.VITE_RAWG_API_KEY
					}&page_size=${size}&ordering=-metacritic`
				);
				const data = await response.json();
				setTopGames(data.results);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};
		const fetchNewGames = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${
						import.meta.env.VITE_RAWG_API_KEY
					}&page_size=${size}&ordering=released`
				);
				const data = await response.json();
				setNewGames(data.results);
			} catch (error) {
				console.error("Error fetching game: ", error);
			}
		};

		fetchPopularGames();
		fetchTopGames();
		fetchNewGames();
	}, []);

	return (
		<>
			<NavBar />
			<div className="py-8 sm:container md:py-16">
				<div className="px-8 md:px-16">
					<section className="w-full py-16">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<div className="self-center py-2 text-transparent bg-gradient-to-r to-fuchsia-500 from-cyan-500 bg-clip-text w-fit">
										<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
											H320 Gamelist
										</h1>
									</div>
									<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
										Discover your next favorite game from H320 Gamelist. Start
										your gaming journey now!
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link to="/browse">
										<Button>
											Browse games <ChevronRight />
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</section>
					<div className="mt-8">
						<div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
							<div className="grid gap-1 mb-4">
								<h1 className="text-xl font-bold">Popular Games</h1>
								<p className="text-foreground/60">
									Discover the most popular games.
								</p>
							</div>
							<Link to="/browse/popularity" className="shrink-0 md:ml-auto">
								<Button size="lg" variant="outline">
									View All
								</Button>
							</Link>
						</div>
						<div className="grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
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

					<div className="mt-8">
						<div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
							<div className="grid gap-1 mb-4">
								<h1 className="text-xl font-bold">Top Rated Games</h1>
								<p className="text-foreground/60">
									Discover the highest rated games.
								</p>
							</div>
							<Link to="/browse/-metacritic" className="shrink-0 md:ml-auto">
								<Button size="lg" variant="outline">
									View All
								</Button>
							</Link>
						</div>
						<div className="grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
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

					<div className="mt-8">
						<div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
							<div className="grid gap-1 mb-4">
								<h1 className="text-xl font-bold">New Games</h1>
								<p className="text-foreground/60">
									Discover the latest released games.
								</p>
							</div>
							<Link to="/browse/released" className="shrink-0 md:ml-auto">
								<Button size="lg" variant="outline">
									View All
								</Button>
							</Link>
						</div>
						<div className="grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
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
