import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import SearchBox from "./SearchBox";


export default function NavBar() {
	return (
		<div className="bg-background p-2 sticky top-0 z-10 border-b">
			<div className="container flex justify-between items-center">
				<div className="flex flex-auto">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link to="/">
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link to="/about">
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="mx-2">
					<SearchBox />
				</div>
				<div>
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}
