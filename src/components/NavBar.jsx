import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import NavSheet from "./NavSheet";
import SearchBox from "./SearchBox";

export default function NavBar() {
	const location = useLocation();

	const isLinkActive = (pathname) => {
		return location.pathname === pathname;
	};

	return (
		<div className="sticky top-0 z-50 w-full border-b bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
			<div className="container flex items-center h-14">
				<div className="flex mr-2 md:hidden">
					<NavSheet />
				</div>
				<div className="hidden mr-4 md:flex">
					<Link className="flex items-center mr-6 space-x-2" to="/">
						<span className="hidden font-bold sm:inline-block">
							H320 Gamelist
						</span>
					</Link>
					<nav className="flex items-center space-x-6 text-sm font-medium">
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
				</div>
				<div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
					<SearchBox />
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}
