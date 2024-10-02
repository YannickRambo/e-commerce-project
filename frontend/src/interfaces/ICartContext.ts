import { Dispatch, SetStateAction } from "react";

export interface ICartContext {
    cartLength: number,
    setCartLength: Dispatch<SetStateAction<number>>
}