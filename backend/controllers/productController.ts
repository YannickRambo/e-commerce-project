import { Request, response, Response } from "express";
import { getProductById, getProducts, registerProduct } from "../database/database";

export async function registerNewProduct(request: Request, response: Response) {
    const { productName, productPrice, productDescription, productImage } = request.body;

    if (!productName || !productPrice || !productDescription || !productImage) return response.status(400).json({ error: "Empty fields" });

    try {
        const result = await registerProduct(productName, productPrice, productDescription, productImage);

        if (!result) {
            return response.status(400).json({ error: "Couldn't be possible to register the product" });
        }

        return response.status(201).json({ message: "Product sucessfully created" });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}

export async function getAllProducts(request: Request, response: Response) {
    try {
        const products = await getProducts();

        if (!products) return response.status(404).json({ error: "No product data available" });

        if (products.length == 0) {
            return response.status(200).json({ message: "Products not found", products});
        }

        return response.status(200).json({ message: "Success", products });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}

export async function getProduct(request: Request, response: Response) {
    const productId = Number(request.params.productId);

    if (!productId) return response.status(400).json({ error: "You must provide a Product ID" });

    try {
        const productInfo = await getProductById(productId);

        if (!productInfo) return response.status(404).json({ error: "No product info available" });

        if (productInfo.length == 0) return response.status(404).json({ error: "Product not found" });

        return response.status(200).json({ message: "Success", productInfo: productInfo[0] });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}
