import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { Products } from "../../components/Products/Products";
import "./Shop.css";

export function Shop() {
    return (
        <section className="shop">
            <HeroBanner />
            <h2>Discover our products</h2>
            <Products />
        </section>
    )
}