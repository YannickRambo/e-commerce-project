import { Dispatch, SetStateAction } from "react";
import { Product } from "../types/Product";

export interface IGetProductInfo {
    parsedProductId: number,
    setError: Dispatch<SetStateAction<string>>,
    setProductInfo: Dispatch<SetStateAction<Product>>
}