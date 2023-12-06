/* eslint-disable react/prop-types */
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
	CardTitle
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
			<div className="w-auto" key={game.id}>
				<Card>
					<img
						className="rounded-t-lg m-0 p-0"
						src={game.background_image}
						alt={game.name}
					/>
					<CardHeader>
						<CardTitle>{game.name}</CardTitle>
						<CardDescription>
							{game.rating}/{game.rating_top}
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
								<Badge key={genre.id} variant="default" className="mr-2">
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
