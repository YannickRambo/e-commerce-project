import { BannerImage } from "../BannerImage/BannerImage";
import formalClothes from "../../assets/formal-clothes.jpg";
import trousers from "../../assets/trousers.jpg";
import { Presentation } from "../Presentation/Presentation";
import "./HeroBanner.css";

export function HeroBanner() {
    return (
        <main className="heroBanner">
            <Presentation />
            <BannerImage bannerClass="bannerImage1" image={formalClothes}/>
            <BannerImage bannerClass="bannerImage2"image={trousers}/>
        </main>
    )
}