import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="flex flex-col h-screen items-center justify-center">
			<span className="font-bold text-2xl">Page Not Found</span>
			<Link to="/">
				<Button variant="outline" className="mt-4">
					Back to Home
				</Button>
			</Link>
		</div>
	);
}
