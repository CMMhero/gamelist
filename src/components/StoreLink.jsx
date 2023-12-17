import { Button } from "@/components/ui/button";
import { SiAppstore, SiEpicgames, SiGogdotcom, SiGoogleplay, SiItchdotio, SiNintendo, SiPlaystation, SiSteam, SiXbox } from "react-icons/si";
import { Link } from "react-router-dom";

const storeIcon =  {
  "playstation-store": SiPlaystation,
	"epic-games": SiEpicgames,
	"steam": SiSteam,
	"xbox360": SiXbox,
	"xbox-store": SiXbox,
	"google-play": SiGoogleplay,
	"nintendo": SiNintendo,
	"gog": SiGogdotcom,
	"apple-appstore": SiAppstore,
	"itch": SiItchdotio
}
export default function StoreLink({ stores, store, index }) {
  const IconComponent = storeIcon[store.store.slug];

	return (
		<Link to={stores[index].url} target="_blank">
			<Button className="w-full font-normal">
				<div className="flex justify-center items-center">
				{IconComponent && <IconComponent className="mr-1"/>}
				<span>{store.store.name}</span>
				</div>
			</Button>
		</Link>
	);
}
