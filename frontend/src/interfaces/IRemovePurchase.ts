import { Dispatch, SetStateAction } from "react";

export interface IRemovePurchase {
    shoppingCartId: number,
    setError: Dispatch<SetStateAction<string>>,
    cartLength: number,
    setCartLength: Dispatch<SetStateAction<number>>
}