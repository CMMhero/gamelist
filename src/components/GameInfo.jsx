const ListItem = ({ title, items }) => (
	<div>
		<p className="font-semibold text-primary">{title}</p>
		{items && items.map((item) => <span key={item.id}>{item.name}, </span>)}
	</div>
);

export default function GameInfo({ game }) {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
				<div>
					<p className="font-semibold text-primary">Date Released</p>
					<span>{game.released ? game.released : "TBA"}</span>
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
					<p className="font-semibold text-primary">Available in</p>
					<span>
						{game.stores.length
							? game.stores.map((store) => store.store.name).join(", ")
							: "-"}
					</span>
				</div>
				<div>
					<p className="font-semibold text-primary">Tags</p>
					<span>
						{game.tags.length
							? game.tags.map((tag) => tag.name).join(", ")
							: "-"}
					</span>
				</div>
				<div>
					<p className="font-semibold text-primary">Website</p>
					<a href={game.website} target="_blank" className="underline">
						{game.website ? game.website : "-"}
					</a>
				</div>
			</div>
		</>
	);
}
