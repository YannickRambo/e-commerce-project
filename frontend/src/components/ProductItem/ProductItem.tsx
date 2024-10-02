import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom";
import { addToShoppingCart } from "../../services/addToShoppingCart";
import { LuShoppingCart } from "react-icons/lu";
import { Product } from "../../types/Product";
import { Purchase } from "../../types/Purchase";
import { CartContext } from "../../contexts/CartContext";
import { Message } from "../Message/Message";
import "./ProductItem.css";

export function ProductItem({ productId, productName, productPrice, productDescription, productImage }: Product) {
    const { clientId } = useContext(AuthContext);
    const navigate = useNavigate();
    const { cartLength, setCartLength } = useContext(CartContext);
    const [message, setMessage] = useState("");

    const purchase = { clientId, productId } as Purchase;

    const addToShoppingCartParams = {
        purchase,
        navigate,
        cartLength,
        setCartLength,
        setMessage
    }

    return (
        <li className="productItem">
            <div className="productImage">
                <Link to={`products/${productId}`}>
                    <img src={productImage} alt={productDescription} loading="lazy"/>
                </Link>
            </div>
            <section className="productDetails">
                <h3>{productName}</h3>
                <p>${productPrice}</p>
            </section>
            <button onClick={() => addToShoppingCart(addToShoppingCartParams)}>Add<LuShoppingCart /></button>
            <Message message={message} />
        </li>
    )
}