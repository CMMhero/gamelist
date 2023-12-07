/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import {
	SiAndroid,
	SiApple,
	SiIos,
	SiLinux,
	SiNintendoswitch,
	SiPlaystation,
	SiWindows,
	SiXbox,
} from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

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
		<>
			<div className="" key={game.id}>
				<Card className="cursor-pointer border-0 hover:scale-110 transition duration-500 w-full h-full">
					<div className="">
						<img
							className="rounded-t-lg"
							src={game.background_image}
							alt={game.name}
							decoding="async"
							loading="lazy"
						/>
					</div>
					<CardHeader>
						<CardTitle>{game.name}</CardTitle>
						<CardDescription>
							<div className="flex items-center">
								<FaStar className="mr-1" /> {game.rating}
							</div>
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex flex-auto">
							{game.parent_platforms.map((platform) => {
								const IconComponent = platformIcon[platform.platform.slug];
								return (
									IconComponent && (
										<IconComponent
											className="mr-1"
											key={platform.platform.id}
										/>
									)
								);
							})}
						</div>
					</CardContent>
					<CardFooter>
						<div>
							{game.genres.map((genre) => (
								<Badge key={genre.id} variant="default" className="mr-1 mb-1">
									{genre.name}
								</Badge>
							))}
						</div>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}
