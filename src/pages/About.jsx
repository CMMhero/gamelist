import NavBar from "@/components/NavBar";
import { SiReact, SiTailwindcss, SiVite } from "react-icons/si";
import Title from "../components/Title";
export default function About() {
	return (
		<>
			<NavBar />
			<div className="sm:container py-8 md:py-16">
				<div className="px-8 md:px-16">
					<Title text="About" />
					Created by:
					<ul>
						<li>Christopher Matthew Marvelio (00000043324)</li>
						<li>Dylan Heboth Rajagukguk (00000082599)</li>
					</ul>
					<br />
					Using:
					<ul>
						<li>
							<SiVite />
							Vite
						</li>
						<li>
							<SiReact />
							React
						</li>
						<li>
							<SiTailwindcss />
							Tailwindcss
						</li>
						<li>
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
							shadcn/ui
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
