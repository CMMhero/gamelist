import { useEffect, useState } from "react";

function App() {
	const baseUrl = "https://api.rawg.io/api/";
	const [games, setGames] = useState(null);

	useEffect(() => {
		fetch(baseUrl + "games?key=dc6f3f19206d43078b51b87ab10705b1")
			.then((response) => response.json())
			.then((data) => setGames(data))
			.catch((error) => console.log(error));

		console.log(games);
	}, []);

	return (
		<>
			<div className="w-full h-100 text-4xl flex justify-center text-blue-400">
				Nice
				{games &&
					games.results.map((game) => {
						<div key={game.id}>{game.name}</div>;
					})}
			</div>
		</>
	);
}

export default App;
