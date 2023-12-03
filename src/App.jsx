import { useEffect, useState } from "react";

function App() {
	let [games, setGames] = useState(null);

	useEffect(() => {
		fetch("https://api.rawg.io/api/games?key=dc6f3f19206d43078b51b87ab10705b1")
			.then((response) => response.json())
			.then((data) => setGames(data));
	}, []);

	return (
		<div className="App">
			{games &&
				games.results.map((game) => (
					<div key={game.id}>{game.name}</div>
				))}
		</div>
	);
}

export default App;