/* eslint-disable react/prop-types */
import {
	SiAndroid,
	SiIos,
	SiLinux,
	SiApple,
	SiNintendoswitch,
	SiPlaystation,
	SiWindows,
	SiXbox,
} from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

const platformIcon = {
	playstation: SiPlaystation,
	xbox: SiXbox,
	pc: SiWindows,
	android: SiAndroid,
	mac: SiApple,
	linux: SiLinux,
	nintendo: SiNintendoswitch,
	web: SlGlobe,
	ios: SiIos,
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
					const IconComponent = platformIcon[platform.platform.slug];
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