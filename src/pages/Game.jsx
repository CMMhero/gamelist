import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
	}, []);

	return (
		<>
			<NavBar />
			<div className="p-16 bg-accent">
				<div className="container">
					<div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent my-8 w-fit self-center">
						<h1 className="text-4xl font-bold">{game.name}</h1>
					</div>
          <img className="w-[500px]" src={game.background_image} alt={game.name} />
          <div dangerouslySetInnerHTML={{ __html: game.description }}>
          </div>
					<br />
					<br />
					{JSON.stringify(game)};
				</div>
			</div>
		</>
	);
}
