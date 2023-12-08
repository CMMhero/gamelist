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
		<div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<div className="mr-2 flex md:hidden">
					<NavSheet />
				</div>
				<div className="mr-4 hidden md:flex">
					<Link className="mr-6 flex items-center space-x-2" to="/">
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
					</nav>
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<SearchBox />
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}
