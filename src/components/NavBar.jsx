import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
	return (
		<div className="bg-background p-4 sticky top-0 z-10">
			<div className="container flex flex-auto justify-between items-center">
				<div>
					<h1>H320 GameList</h1>
				</div>
				<div>
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}
