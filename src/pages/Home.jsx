import GameCard from "@/components/GameCard";
import { GameCardSkeleton } from "@/components/GameCardSkeleton";
import NavBar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";
import Filter from "../components/Filter";
import Title from "../components/Title";

export default function Home() {
	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [orderBy, setOrderBy] = useState("popularity");
	const [viewType, setViewType] = useState(
		localStorage.getItem("view") || "grid"
	);
	const loaderRef = useRef(null);

	useEffect(() => {
		const fetchGames = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1&page=${page}&ordering=${orderBy}`
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
	}, [page, loading, orderBy]);

	const handleFilterChange = (newOrder) => {
		setGames([]); // Clear existing games when changing ordering
		setPage(1); // Reset page to 1 when changing ordering
		setOrderBy(newOrder);
	};

	const handleViewChange = (type) => {
		if (!type) return;
		setViewType(type);
	};

	return (
		<>
			<NavBar />
			<div className="sm:container py-8 md:py-16">
				<div className="px-4 md:px-16">
					<Title text="Top Games" />
					<Filter
						onFilterChange={handleFilterChange}
						onViewChange={handleViewChange}
					/>
					{games.length > 0 && (
						<div
							className={`grid ${
								viewType === "grid"
									? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
									: viewType === "cards"
									? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
									: viewType === "list"
									? "grid-cols-1 gap-4 md:gap-4"
									: ""
							} mt-8`}
						>
							{games.map((game) => (
								<GameCard key={game.id} game={game} view={viewType} />
							))}
						</div>
					)}
					<div className="w-full h-[25vh]" ref={loaderRef}>
						{loading && (
							<div
								className={`grid ${
									viewType === "grid"
										? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
										: viewType === "cards"
										? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
										: viewType === "list"
										? "grid-cols-1 gap-4 md:gap-4"
										: ""
								} my-8`}
							>
								{Array.from({ length: 20 }).map((_, index) => (
									<GameCardSkeleton key={index} view={viewType} />
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
