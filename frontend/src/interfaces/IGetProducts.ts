import { Dispatch, SetStateAction } from "react";
import { Product } from "../types/Product";

export interface IGetProducts {
    setMessage: Dispatch<SetStateAction<string>>,
    setProducts: Dispatch<SetStateAction<Product[]>>
}