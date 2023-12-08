import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";

export function Profile({ name, nim, username }) {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Link
					to={`https://github.com/${username}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button variant="ghost">{name}</Button>
				</Link>
			</HoverCardTrigger>
			<HoverCardContent className="w-fit">
				<div className="flex justify-between space-x-4">
					<Avatar>
						<AvatarImage src={`https://github.com/${username}.png`} />
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@{username}</h4>
						<p className="text-sm">{name}</p>
						<p className="text-sm">{nim}</p>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
