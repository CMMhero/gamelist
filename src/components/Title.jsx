export default function Title({ text }) {
	return (
		<div className="bg-gradient-to-r to-fuchsia-500 from-cyan-500 bg-clip-text text-transparent mb-8 w-fit self-center  py-2">
			<h1 className="text-4xl font-bold">{text}</h1>
		</div>
	);
}
