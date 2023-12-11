import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export default function Image({ src, alt, className }) {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			<Skeleton className={`${className} ${isLoaded ? "hidden" : "block"}`} />
			<img
				src={src}
				alt={alt}
				className={`${className} ${isLoaded ? "block" : "hidden"}`}
				loading="lazy"
				decoding="async"
				onLoad={() => setIsLoaded(true)}
			/>
		</>
	);
}
