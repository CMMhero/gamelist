/* eslint-disable react/prop-types */
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";

const platformIcon = {
	"PlayStation": FaPlaystation,
	"Xbox": FaXbox,
	"PC": FaWindows,
	"Android": FaAndroid,
	"Apple Macintosh": FaApple,
  "Linux": FaLinux,
	"Nintendo": SiNintendoswitch,
};

export default function GameCard({ game }) {
	return (
		<div className="w-auto" key={game.id}>
			<img
				className="aspect-video rounded-2xl object-fit-contain"
				src={game.background_image}
				alt={game.name}
			/>
			<h2 className="text-xl text-red-400">{game.name}</h2>
			{game.rating}/{game.rating_top}
			<div className="flex flex-auto">
				{game.parent_platforms.map((platform) => {
					const IconComponent = platformIcon[platform.platform.name];
					return IconComponent && <IconComponent className="mr-1" key={platform.platform.id} />;
				})}
			</div>
			<div>
				{game.genres.map((genre) => (
					<span key={genre.id}>{genre.name} | </span>
				))}
			</div>
		</div>
	);
}