import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function NavSheet() {
	const location = useLocation();

	const isLinkActive = (pathname) => {
		return location.pathname === pathname;
	};

	return (
		<Sheet>
			<SheetTrigger>
				<Button size="icon" variant="outline">
					<AiOutlineMenu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader className="text-left">
					<SheetTitle>
						<Link className="flex items-center mr-6 space-x-2" to="/">
							<span className="font-bold">
								H320 Gamelist
							</span>
						</Link>
					</SheetTitle>
					<SheetDescription>
						<nav className="flex flex-col space-y-3">
							<Link
								to="/"
								className={`transition-colors ${
									isLinkActive("/")
										? "text-foreground"
										: "hover:text-foreground/80 text-foreground/60"
								}`}
							>
								Home
							</Link>
							<Link
								to="/about"
								className={`transition-colors ${
									isLinkActive("/about")
										? "text-foreground"
										: "hover:text-foreground/80 text-foreground/60"
								}`}
							>
								About
							</Link>
							<Link
								to="/browse"
								className={`transition-colors ${
									isLinkActive("/browse")
										? "text-foreground"
										: "hover:text-foreground/80 text-foreground/60"
								}`}
							>
								Browse
							</Link>
						</nav>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
