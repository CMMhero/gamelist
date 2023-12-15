import GameCard from "@/components/GameCard";
import { GameCardSkeleton } from "@/components/GameCardSkeleton";
import NavBar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";
import Filter from "../components/Filter";
import Title from "../components/Title";

export default function Browse() {
	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [orderBy, setOrderBy] = useState("popularity");
	const [genres, setGenres] = useState([]);
	const [platforms, setPlatforms] = useState([]);
	const [stores, setStores] = useState([]);
	const [viewType, setViewType] = useState(
		localStorage.getItem("view") || "grid"
	);
	const loaderRef = useRef(null);

	useEffect(() => {
		const fetchGames = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1&page=${page}
					&ordering=${orderBy}
					${platforms.length ? `&parent_platforms=${platforms.join(", ")}` : ``}
					${genres.length ? `&genres=${genres.join(",")}` : ``}
					${stores.length ? `&stores=${stores.join(",")}` : ``}`
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
	}, [page, loading, orderBy, platforms, genres, stores]);

	const handleFilterChange = (value) => {
		setGames([]);
		setPage(1);
		setOrderBy(value);
	};

	const handleGenreChange = (value) => {
		setGames([]);
		setPage(1);
		setGenres(value);
	};
	const handlePlatformChange = (value) => {
		setGames([]);
		setPage(1);
		setPlatforms(value);
	};
	const handleStoreChange = (value) => {
		setGames([]);
		setPage(1);
		setStores(value);
	};

	const handleViewChange = (type) => {
		if (!type) return;
		setViewType(type);
	};

	return (
		<>
			<NavBar />
			<div className="py-8 sm:container md:py-16">
				<div className="px-4 md:px-16">
					<Title text="Top Games" />
					<Filter
						onFilterChange={handleFilterChange}
						onViewChange={handleViewChange}
						onGenreChange={handleGenreChange}
						onPlatformChange={handlePlatformChange}
						onStoreChange={handleStoreChange}
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
