import { IGetProductsFromCart } from "../interfaces/IGetProductsFromCart";

export async function getProductsFromCart({clientId, setMessage, setShoppingCart}: IGetProductsFromCart) {
    try {
        const response = await fetch(`http://localhost:5000/shopping-cart/${clientId}`);

        if (!response.ok) {
            return;
        }

        const { message, shoppingCart } = await response.json();

        setMessage(message);
        setShoppingCart(shoppingCart);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}