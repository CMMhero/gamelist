import NavBar from "@/components/NavBar";

export default function About() {
	return (
		<>
			<NavBar />
			<div className="p-16 h-screen bg-accent">
				<div className="container">
					<div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent my-8 w-fit self-center">
						<h1 className="text-4xl font-bold">About</h1>
					</div>
				Created by Christopher Matthew Marvelio (00000043324)
				</div>
			</div>
		</>
	);
}
