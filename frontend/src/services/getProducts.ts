import { IGetProducts } from "../interfaces/IGetProducts";

export async function getProducts({ setMessage, setProducts }: IGetProducts) {
    try {
        const response = await fetch("http://localhost:5000/products");

        if (!response.ok) {
            const { error } = await response.json();
            console.error(error);
            return;
        }

        const result = await response.json();

        const { message, products } = result;

        setMessage(message);
        setProducts(products);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}