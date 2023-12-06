import { useEffect, useState } from "react";
import GameCard from "./components/GameCard";

function App() {
	let [games, setGames] = useState(null);

	useEffect(() => {
		fetch("https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1")
			.then((response) => response.json())
			.then((data) => setGames(data));

	}, []);

	console.log(games);
	return (
		<div className="w-full p-16 bg-zinc-900">
			<div className="grid grid-flow-row grid-cols-2 gap-8 text-slate-100 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
				{games &&
					games.results.map((game) => <GameCard key={game.id} game={game} />)}
			</div>
		</div>
	);
}

export default App;