import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { CartProduct } from "../types/CartProduct";

export interface IGetProductsFromCart {
    clientId: number,
    navigate: NavigateFunction,
    setMessage: Dispatch<SetStateAction<string>>,
    setShoppingCart: Dispatch<SetStateAction<CartProduct[]>>
}