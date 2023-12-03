import { useEffect, useState } from "react";

function App() {
	let [games, setGames] = useState(null);

	useEffect(() => {
		fetch("https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1")
			.then((response) => response.json())
			.then((data) => setGames(data));
	}, []);

	return (
		<div className="container flex justify-center p-16">
			<div className="grid grid-flow-row grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
				{games &&
					games.results.map((game) => (
						<div className="w-auto" key={game.id}>
							<img
								className="aspect-video rounded-2xl object-fit-contain"
								src={game.background_image}
							/>
							<h2 className="text-xl text-red-400">{game.name}</h2> {game.rating}/{game.rating_top}
							{game.parent_platforms.map((platform) => (
								<p key={platform.platform.id}>{platform.platform.name}</p>
							))}
							{game.genres.map((genre) => (
								<p key={genre.id}>{genre.name}</p>
							))}
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
