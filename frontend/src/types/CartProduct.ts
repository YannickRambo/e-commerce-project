import { Product } from "./Product";

export interface CartProduct extends Product {
    shoppingCartId: number
}   