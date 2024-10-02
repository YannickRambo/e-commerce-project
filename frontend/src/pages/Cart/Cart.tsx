import { useContext, useEffect, useMemo, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom";
import { getProductsFromCart } from "../../services/getProductsFromCart";
import { Container } from "../../components/Container/Container";
import { CartItem } from "../../components/CartItem/CartItem";
import { CartProduct } from "../../types/CartProduct";
import "./Cart.css";

export function Cart() {
    const { clientId } = useContext(AuthContext);
    const [shoppingCart, setShoppingCart] = useState<CartProduct[]>([]);
    const [message, setMessage] = useState<string>("");
    const navigate = useNavigate();

    const getProductsFromCartParams = {
        clientId,
        navigate,
        setMessage,
        setShoppingCart,
    }

    useEffect(() => {
        getProductsFromCart(getProductsFromCartParams);
    }, [clientId, shoppingCart]);

    const total = useMemo((() => {
        return shoppingCart.reduce((total, product) => total + Number(product.productPrice), 0);
    }), [shoppingCart]);

    if (!clientId) {
        return (
            <>
                <Container>
                    <div className="unsigned">
                        <p>Please, sign in to see your Shopping Cart</p>
                        <Link className="cartLink" to={"/login"}>Click here</Link>
                    </div>
                </Container>
            </>
        )
    }

    return (
        <section className="shoppingCart">
            <Container>
                {shoppingCart.length > 0 ?
                    <>
                        <ul className="shoppingCartList">
                            {shoppingCart.map((purchase: CartProduct) =>
                                <CartItem
                                    key={purchase.shoppingCartId}
                                    productId={purchase.productId}
                                    shoppingCartId={purchase.shoppingCartId}
                                    productImage={purchase.productImage}
                                    productDescription={purchase.productDescription}
                                    productName={purchase.productName}
                                    productPrice={purchase.productPrice}
                                />
                            )}
                        </ul>
                        <div className="total">
                            <h3>Total: ${total}</h3>
                        </div>
                    </>
                    : <div className="emptyCart">
                        <p>{message}</p>
                        <Link to={"/"} className="cartLink">Return to Shop</Link>
                    </div>
                }
            </Container>
        </section>
    )
}