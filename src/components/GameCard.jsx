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

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Link } from "react-router-dom";
import Image from "./Image";

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

export default function GameCard({ game, view }) {
	switch (view) {
		case "grid":
			return (
				<>
					<HoverCard>
						<HoverCardTrigger>
							<Link key={game.id} to={`/game/${game.id}`}>
								<Card className="aspect-[1.5/1] overflow-hidden mb-1">
									{game.background_image ? (
										<Image
											className="w-full h-full object-cover"
											src={game.background_image}
											alt={game.name}
										/>
									) : (
										<div className="bg-primary w-full h-full items-center justify-center flex">
											<span className="text-primary-foreground">
												{game.name}
											</span>
										</div>
									)}
								</Card>
								<span className="font-semibold text-xs sm:text-sm md:text-md">
									{game.name}
								</span>
							</Link>
						</HoverCardTrigger>
						<HoverCardContent>
							<div className="flex flex-col gap-1">
								<span className="font-semibold text-xs sm:text-sm md:text-md">
									{game.name}
								</span>
								<div className="flex">
									<div className="flex items-center flex-auto">
										{game.parent_platforms.slice(0, 5).map((platform) => {
											const IconComponent =
												platformIcon[platform.platform.slug];
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
								<div className="space-y-1">
									{game.genres.slice(0, 3).map((genre) => (
										<Badge key={genre.id} variant="default" className="mr-1">
											{genre.name}
										</Badge>
									))}
									{game.genres.length > 3 && (
										<Badge key="moreGenres" variant="default">
											+{game.genres.length - 3}
										</Badge>
									)}
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				</>
			);

		case "cards":
			return (
				<>
					<Link key={game.id} to={`/game/${game.id}`}>
						<Card className="w-full h-full cursor-pointer overflow-hidden">
							<div className="aspect-video overflow-hidden">
								{game.background_image ? (
									<Image
										className="w-full h-full object-cover"
										src={game.background_image}
										alt={game.name}
									/>
								) : (
									<div className="bg-primary w-full h-full items-center justify-center flex">
										<span className="text-primary-foreground">{game.name}</span>
									</div>
								)}
							</div>
							<CardHeader>
								<CardTitle>{game.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex flex-col gap-1">
									<div className="flex">
										<div className="flex items-center flex-auto">
											{game.parent_platforms.slice(0, 5).map((platform) => {
												const IconComponent =
													platformIcon[platform.platform.slug];
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
									<div className="space-y-1">
										{game.genres.slice(0, 3).map((genre) => (
											<Badge key={genre.id} variant="default" className="mr-1">
												{genre.name}
											</Badge>
										))}
										{game.genres.length > 3 && (
											<Badge key="moreGenres" variant="default">
												+{game.genres.length - 3}
											</Badge>
										)}
									</div>
								</div>
							</CardContent>
						</Card>
					</Link>
				</>
			);

		case "list":
			return (
				<>
					<Link key={game.id} to={`/game/${game.id}`}>
						<Card className="w-full h-full cursor-pointer overflow-hidden">
							<div className="flex p-4">
								<div className="flex gap-4">
									<div className="h-20 aspect-square md:h-16 md:aspect-video overflow-hidden rounded-lg">
										{game.background_image ? (
											<Image
												className="w-full h-full object-cover"
												src={game.background_image}
												alt={game.name}
											/>
										) : (
											<div className="bg-primary w-full h-full items-center justify-center flex"></div>
										)}
									</div>
									<div className="flex gap-2 flex-col">
										<CardTitle className="font-semibold text-sm sm:text-md md:text-lg">
											{game.name}
										</CardTitle>
										<CardDescription>
											<div className="flex flex-col md:flex-row gap-2">
												<div className="space-y-1 space-x-1">
													{game.genres.slice(0, 3).map((genre) => (
														<Badge key={genre.id} variant="default">
															{genre.name}
														</Badge>
													))}
													{game.genres.length > 3 && (
														<Badge key="moreGenres" variant="default">
															+{game.genres.length - 3}
														</Badge>
													)}
												</div>
												<div className="flex">
													{game.parent_platforms.slice(0, 5).map((platform) => {
														const IconComponent =
															platformIcon[platform.platform.slug];
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
																		<span>
																			+{game.parent_platforms.length - 5}
																		</span>
																	</TooltipTrigger>
																	<TooltipContent>
																		<p>
																			{game.parent_platforms
																				.slice(5)
																				.map(
																					(platform) => platform.platform.name
																				)
																				.join(", ")}
																		</p>
																	</TooltipContent>
																</Tooltip>
															</TooltipProvider>
														</>
													)}
													{game.metacritic && (
														<div className="mx-1 px-1 border-2 rounded-md">
															{game.metacritic}
														</div>
													)}
												</div>
											</div>
										</CardDescription>
									</div>
								</div>
							</div>
						</Card>
					</Link>
				</>
			);

		default:
			return null;
	}
}
