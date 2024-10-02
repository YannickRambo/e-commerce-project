import { Link } from "react-router-dom";
import "./NotFound.css";

export function NotFound() {
    return (
        <section className="notFound">
                <p><span>404</span> - Page not found</p>
                <Link className="notFoundLink" to={"/"}>Click here to return</Link>
        </section>
    )
}