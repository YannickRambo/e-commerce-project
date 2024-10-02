import { useEffect, useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import { Product } from "../../types/Product";
import { getProducts } from "../../services/getProducts";
import "./Products.css";
import { Container } from "../Container/Container";

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [message, setMessage] = useState<string>("");

    const getProductsParams = {
        setMessage,
        setProducts
    }

    useEffect(() => {
        getProducts(getProductsParams);
    }, [products]);

    return (
        <main className="products">
            <Container>
                {
                    products.length > 0 ?
                        <ul className="productsList">
                            {products.map((product: Product) =>
                                <ProductItem
                                    key={product.productId}
                                    productId={product.productId}
                                    productName={product.productName}
                                    productPrice={product.productPrice}
                                    productDescription={product.productDescription}
                                    productImage={product.productImage}
                                />
                            )}
                        </ul> : <h3>{message}</h3>
                }
            </Container>
        </main>
    );
}