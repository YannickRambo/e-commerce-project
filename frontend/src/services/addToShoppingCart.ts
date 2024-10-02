import { IAddToShoppingCart } from "../interfaces/IAddToShoppingCart";

export async function addToShoppingCart({ purchase, navigate, cartLength, setCartLength, setMessage }: IAddToShoppingCart) {
    setMessage("");

    try {
        const response = await fetch("http://localhost:5000/purchase", {
            method: "POST",
            body: JSON.stringify(purchase),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            navigate("/login");
            return;
        }

        const { message } = await response.json();

        setCartLength(cartLength + 1);
        setMessage(message);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}