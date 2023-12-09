import { Link } from "react-router-dom";

function formatDate(dateString) {
	const date = new Date(dateString);

	if (isNaN(date.getTime())) {
		return "Invalid Date";
	}

	const options = { year: "numeric", month: "long", day: "numeric" };

	return date.toLocaleDateString("en-US", options);
}

export default function GameInfo({ game, stores }) {
	return (
		<>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<p className="font-semibold text-primary">Date Released</p>
					<span>{game.released ? formatDate(game.released) : "TBA"}</span>
				</div>
				<div>
					<p className="font-semibold text-primary">Developer</p>
					<span>
						{game.developers.length
							? game.developers.map((developer) => developer.name).join(", ")
							: "-"}
					</span>
				</div>
				<div>
					<p className="font-semibold text-primary">Genre</p>
					<span>
						{game.genres.length
							? game.genres.map((genre) => genre.name).join(", ")
							: "-"}
					</span>
				</div>
				<div>
					<p className="font-semibold text-primary">Platform</p>
					<span>
						{game.platforms.length
							? game.platforms
									.map((platform) => platform.platform.name)
									.join(", ")
							: "-"}
					</span>
				</div>
				<div>
					<p className="font-semibold text-primary">Publisher</p>
					<span>
						{game.publishers.length
							? game.publishers.map((publisher) => publisher.name).join(", ")
							: "-"}
					</span>
				</div>
				<div>
					<p className="font-semibold text-primary">Website</p>
					{game.website ? (
						<Link to={game.website} target="_blank" className="underline">
							{game.website}
						</Link>
					) : (
						"-"
					)}
				</div>
				<div className="md:col-span-2">
					<p className="font-semibold text-primary">Tags</p>
					<span>
						{game.tags.length
							? game.tags.map((tag) => tag.name).join(", ")
							: "-"}
					</span>
				</div>
				<div className="md:col-span-2">
					<p className="font-semibold text-primary">Available in</p>
					<span>
						{game.stores.length
							? game.stores.map((store, index) => (
									<Link
										to={stores[index].url}
										key={store.store.id}
										target="_blank"
									>
										<span className="underline">{store.store.name}</span>
										{index < game.stores.length - 1 && ", "}
									</Link>
							  ))
							: "-"}
					</span>
				</div>
			</div>
		</>
	);
}
