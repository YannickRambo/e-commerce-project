import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Product } from "../../types/Product";
import { getProductInfo } from "../../services/getProductInfo";
import { Container } from "../../components/Container/Container";
import "./ProductInfo.css";
import { LuShoppingCart } from "react-icons/lu";
import { addToShoppingCart } from "../../services/addToShoppingCart";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { Purchase } from "../../types/Purchase";
import { Message } from "../../components/Message/Message";

export function ProductInfo() {
    const { clientId } = useContext(AuthContext);
    const navigate = useNavigate();
    const { cartLength, setCartLength } = useContext(CartContext);
    const [message, setMessage] = useState("");

    const { productId } = useParams();

    const parsedProductId = Number(productId);

    const purchase = { clientId, productId: parsedProductId } as Purchase;

    const [productInfo, setProductInfo] = useState<Product>({
        productId: 0,
        productName: "",
        productPrice: 0,
        productDescription: "",
        productImage: ""
    });

    const [error, setError] = useState<string>("");

    const getProductInfoParams = {
        parsedProductId,
        setError,
        setProductInfo
    }

    useEffect(() => {
        getProductInfo(getProductInfoParams);
    }, []);

    const addToShoppingCartParams = {
        purchase,
        navigate,
        cartLength,
        setCartLength,
        setMessage
    }

    if (error) return <h1>{error}</h1>

    return (
        <section className="productInfo">
            <Container>
                <div className="productInfoImage">
                    <img src={productInfo.productImage} alt={productInfo.productDescription} />
                </div>
                <div className="productInfoDetails">
                    <h1>{productInfo?.productName}</h1>
                    <p>${productInfo?.productPrice}</p>
                    <p>{productInfo?.productDescription}</p>
                    <button onClick={() => addToShoppingCart(addToShoppingCartParams)}>Add <LuShoppingCart /></button>
                </div>
                <Message message={message} />
            </Container>
        </section>
    )
}