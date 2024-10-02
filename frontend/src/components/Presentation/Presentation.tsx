import shop from "../../assets/shop.jpg";
import { Overflow } from "../Overflow/Overflow";
import "./Presentation.css";

export function Presentation() {
    return (
        <div className="presentation">
            <figure className="presentationImage">
                <img src={shop} loading="lazy" />
                <Overflow title="Welcome to the E-Commerce Project" text="Here you can find many quality and affordable products for you and your family." />
            </figure>
        </div>
    )
}