import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { Purchase } from "../types/Purchase";

export interface IAddToShoppingCart {
    purchase: Purchase,
    navigate: NavigateFunction,
    cartLength: number,
    setCartLength: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
}