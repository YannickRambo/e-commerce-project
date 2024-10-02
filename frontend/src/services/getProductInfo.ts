import { IGetProductInfo } from "../interfaces/IGetProductInfo";

export async function getProductInfo({ parsedProductId, setError, setProductInfo }: IGetProductInfo) {
    try {
        const response = await fetch(`http://localhost:5000/products/${parsedProductId}`);

        if (!response.ok) {
            const { error } = await response.json();
            setError(error);
            return;
        }

        const { productInfo } = await response.json();
        setProductInfo(productInfo);
    } catch (error) {
        if (error instanceof Error) setError(error.message);
    }
}
