import { Link } from "react-router-dom";
import "./NavbarMenu.css";
import { LuShoppingBag, LuShoppingCart, LuUserCircle } from "react-icons/lu";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function NavbarMenu() {
    const { cartLength } = useContext(CartContext);

    return (
        <nav className="navbarMenu">
            <ul>
                <li>
                    <Link className="navbarLinks" to={"/"}><LuShoppingBag /></Link>
                </li>
                <li>
                    <Link className="navbarLinks" to={"/register"}><LuUserCircle /></Link>
                </li>
                <li>
                    <Link className="navbarLinks" to={"/shopping-cart"}><LuShoppingCart /></Link>
                    {cartLength > 0 ?
                        <div className="cartLength">
                            {cartLength}
                        </div> : ""
                    }
                </li>
            </ul>
        </nav>
    )
}