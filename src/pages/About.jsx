import NavBar from "@/components/NavBar";

export default function About() {
	return (
		<>
			<NavBar />
			<div className="sm:container">
				<div className="px-8 md:px-16">
					<div className="bg-gradient-to-r to-fuchsia-500 from-cyan-500 bg-clip-text text-transparent my-8 w-fit self-center  py-2">
						<h1 className="text-4xl font-bold">About</h1>
					</div>
					Created by:
					<ul>
						<li>Christopher Matthew Marvelio (00000043324)</li>
						<li>Dylan Heboth Rajagukguk (00000082599)</li>
					</ul>
					<br />
					Using:
					<ul>
						<li>Vite</li>
						<li>React</li>
						<li>Tailwindcss</li>
						<li>shadcn/ui</li>
					</ul>
				</div>
			</div>
		</>
	);
}
