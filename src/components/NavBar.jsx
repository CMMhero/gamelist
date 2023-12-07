import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";


export default function NavBar() {
	return (
		<div className="bg-background p-4 sticky top-0 z-10">
			<div className="container flex flex-auto justify-between items-center">
				<div className="flex flex-auto items-center">
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
				<div>
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}
