import NavBar from "@/components/NavBar";
import Title from "../components/Title";
export default function Home() {
	return (
		<>
			<NavBar />
			<div className="py-8 sm:container md:py-16">
				<div className="px-8 md:px-16">
					<Title text="H320 Gamelist" />
					<span className="font-semibold text-md">
						A simple game list website.
					</span>
					</div>
			</div>
		</>
	);
}
