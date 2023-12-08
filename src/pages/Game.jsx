import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
			<div className="sm:container py-8 md:py-16">
				<div className="px-8 md:px-16">
					<Title text={game.name} />
					<img
						className="w-[500px]"
						src={game.background_image}
						alt={game.name}
					/>
					<div dangerouslySetInnerHTML={{ __html: game.description }} />
					<p>
						Metacritic: {game.metacritic} {game.metacritic_url}
					</p>
					<p>Date Released: {game.released}</p>
					<p>Developer</p>
					{game.developers &&
						game.developers.map((developer) => (
							<span key={developer.id}>{developer.name}, </span>
						))}
					<p>Genre</p>
					{game.genres &&
						game.genres.map((genre) => (
							<span key={genre.id}>{genre.name}, </span>
						))}
					<p>Platform</p>
					{game.platforms &&
						game.platforms.map((platform) => (
							<span key={platform.platform.id}>{platform.platform.name}, </span>
						))}
					<p>Publisher</p>
					{game.publishers &&
						game.publishers.map((publisher) => (
							<span key={publisher.id}>{publisher.name}, </span>
						))}
					<p>Available in</p>
					{game.stores &&
						game.stores.map((store) => (
							<span key={store.store.id}>{store.store.name}, </span>
						))}
					<p>Tags</p>
					{game.tags &&
						game.tags.map((tag) => <span key={tag.id}>{tag.name}, </span>)}
					<p>{game.website}</p>
				</div>
			</div>
		</>
	);
}
