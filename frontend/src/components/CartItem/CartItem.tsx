import { useContext, useState } from "react";
import { removePurchase } from "../../services/removePurchase";
import { CartProduct } from "../../types/CartProduct";
import { CartContext } from "../../contexts/CartContext";
import "./CartItem.css";
import { LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";

export function CartItem({ productId, shoppingCartId, productImage, productDescription, productName, productPrice }: CartProduct) {
    const [error, setError] = useState<string>("");
    const { cartLength, setCartLength } = useContext(CartContext);

    const removePurchaseParams = {
        shoppingCartId,
        setError,
        cartLength,
        setCartLength
    }

    return (
        <li className="cartItem">
            <div className="cartItemImage">
                <Link to={`/products/${productId}`}>
                    <img src={productImage} alt={productDescription} />
                </Link>
            </div>
            <section className="cartItemDetails">
                <h3>{productName}</h3>
                <p>${productPrice}</p>
                <p>{productDescription}</p>
                {error}
                <button onClick={() => removePurchase(removePurchaseParams)}>Remove <LuTrash /></button>
            </section>
        </li>
    )
}