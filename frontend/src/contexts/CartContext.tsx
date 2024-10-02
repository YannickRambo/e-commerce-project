import { createContext, useState } from "react";
import { CartProviderProps } from "../types/CartProviderProps";
import { ICartContext } from "../interfaces/ICartContext";

const defaultContext = {
    cartLength: 0,
    setCartLength: () => { }
} as ICartContext;

export const CartContext = createContext(defaultContext);

export function CartProvider({ children }: CartProviderProps) {
    const [cartLength, setCartLength] = useState(0);

    return (
        <CartContext.Provider value={{ cartLength, setCartLength }}>
            {children}
        </CartContext.Provider>
    )
}