import { IRemovePurchase } from "../interfaces/IRemovePurchase";

export async function removePurchase({ shoppingCartId, setError, cartLength, setCartLength }: IRemovePurchase) {
    try {
        const response = await fetch(`http://localhost:5000/shopping-cart/${shoppingCartId}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            const { error } = await response.json();
            setError(error);
            return;
        }

        setCartLength(cartLength - 1);
    } catch (error) {
        if (error instanceof Error) setError(error.message);
    }
}