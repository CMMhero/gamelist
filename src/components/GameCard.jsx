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
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { Link } from "react-router-dom";

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
			<Link key={game.id} to={`/game/${game.id}`}>
				<Card className="cursor-pointer hover:scale-105 md:hover:scale-110 transition duration-500 w-full h-full">
					<div className="rounded-t-lg w-full h-40 bg-secondary overflow-hidden">
						{game.background_image && (
							<img
								className="object-cover h-full w-full"
								src={game.background_image}
								alt={game.name}
								decoding="async"
								loading="lazy"
							/>
						)}
					</div>
					<CardHeader>
						<CardTitle>{game.name}</CardTitle>
						<CardDescription>
							<div className="flex">
								<div className="flex items-center flex-auto">
									{game.parent_platforms.slice(0, 5).map((platform) => {
										const IconComponent = platformIcon[platform.platform.slug];
										return (
											IconComponent && (
												<>
													<TooltipProvider>
														<Tooltip>
															<TooltipTrigger>
																<IconComponent
																	className="mr-1"
																	key={platform.platform.id}
																/>
															</TooltipTrigger>
															<TooltipContent>
																<p>{platform.platform.name}</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</>
											)
										);
									})}
									{game.parent_platforms.length > 5 && (
										<>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<span>+{game.parent_platforms.length - 5}</span>
													</TooltipTrigger>
													<TooltipContent>
														<p>
															{game.parent_platforms
																.slice(5)
																.map((platform) => platform.platform.name)
																.join(", ")}
														</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</>
									)}
								</div>
								{game.metacritic && (
									<div className="px-1 border-2 rounded-md">
										{game.metacritic}
									</div>
								)}
							</div>
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div>
							{game.genres.map((genre) => (
								<Badge key={genre.id} variant="default" className="mr-1 mb-1">
									{genre.name}
								</Badge>
							))}
						</div>
					</CardContent>
				</Card>
			</Link>
		</>
	);
}
