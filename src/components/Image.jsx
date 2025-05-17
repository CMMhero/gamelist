import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
// import LazyLoad from "react-lazy-load";

export default function ImageComponent({ src, alt, className }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageLoaded(true);
		};
		img.src = src;
	}, [src]);

	return (
		<div className="w-full h-full">
			<Skeleton
				className={`${className} ${imageLoaded ? "hidden" : "block"}`}
			/>
			<img
				src={src}
				alt={alt}
				className={`${className} ${imageLoaded ? "block" : "hidden"}`}
				loading="lazy"
				decoding="async"
				onLoad={() => setImageLoaded(true)}
			/>
		</div>
	);
}
