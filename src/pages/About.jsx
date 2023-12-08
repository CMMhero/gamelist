import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/Button";
import { SiReact, SiTailwindcss, SiVite } from "react-icons/si";
import { Profile } from "../components/Profile";
import Title from "../components/Title";
export default function About() {
	return (
		<>
			<NavBar />
			<div className="sm:container py-8 md:py-16">
				<div className="px-8 md:px-16">
					<Title text="About" />
					<span className="text-md font-semibold">
						A simple game list website.
					</span>
					<br />
					<br />
					<span className="text-md font-semibold">Created by</span>
					<div className="flex flex-col justify-left items-left align-left text-left md:flex-row">
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
					<br />
					<span className="text-md font-semibold">Using</span>
					<div className="flex flex-col justify-left items-left align-left text-left md:flex-row">
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
								className="h-4 w-4"
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
		</>
	);
}
