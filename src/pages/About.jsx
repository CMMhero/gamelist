import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { SiReact, SiTailwindcss, SiVite } from "react-icons/si";
import { Profile } from "../components/Profile";
import Title from "../components/Title";
export default function About() {
	return (
		<>
			<NavBar />
			<div className="py-8 sm:container md:py-16">
				<div className="px-8 md:px-16">
					<Title text="About" />
					<p className="text-lg text-foreground/60">
						H320 Gamelist is a comprehensive library of the best games across
						all platforms. We are dedicated to helping gamers find their next
						favorite game with ease. Our platform includes search and filter
						functions and detailed information about each game. H320 Gamelist is
						here to enhance your gaming experience.
					</p>
					<div className="py-12">
						<h2 className="text-2xl font-bold mb-6">Creator</h2>
						<div className="flex flex-col text-left justify-left items-left align-left md:flex-row gap-2">
							<Profile
								name="Christopher Matthew Marvelio"
								nim="00000043324"
								username="cmmhero"
							/>
							<Profile
								name="Dylan Heboth Rajagukguk"
								nim="00000082599"
								username="DillJest"
							/>
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-bold mb-6">Developed using</h2>
						<div className="flex flex-col text-left justify-left items-left align-left md:flex-row gap-2">
							<Button variant="ghost" className="space-x-1 w-fit">
								<SiVite />
								<span>Vite</span>
							</Button>
							<Button variant="ghost" className="space-x-1 w-fit">
								<SiReact />
								<span>React</span>
							</Button>
							<Button variant="ghost" className="space-x-1 w-fit">
								<SiTailwindcss />
								<span>Tailwindcss</span>
							</Button>
							<Button variant="ghost" className="space-x-1 w-fit">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 256"
									className="w-4 h-4"
								>
									<rect width="256" height="256" fill="none"></rect>
									<line
										x1="208"
										y1="128"
										x2="128"
										y2="208"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="16"
									></line>
									<line
										x1="192"
										y1="40"
										x2="40"
										y2="192"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="16"
									></line>
								</svg>
								<span>shadcn/ui</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
