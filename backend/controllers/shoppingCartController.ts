import { Request, Response } from "express";
import { addToShoppingCart, deletePurchase, getPurchaseById } from "../database/database";

export async function registerPurchase(request: Request, response: Response) {
    const { clientId, productId } = request.body;

    if (!clientId || !productId) return response.status(401).json({ error: "You must be logged to add a product in your Shopping Cart" });

    try {
        const result = await addToShoppingCart(clientId, productId);

        if (!result) {
            return response.status(400).json({ error: "Couldn't be possible to add the product to the Shopping Cart" });
        }

        return response.status(201).json({ message: "Successfully added to your Shopping Cart" });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}

export async function getAllProductsById(request: Request, response: Response) {
    const clientId = Number(request.params.clientId);

    if (!clientId) return response.status(401).json({ error: "You must provide a Client ID" });

    try {
        const shoppingCart = await getPurchaseById(Number(clientId));

        if (!shoppingCart) return response.status(404).json({ error: "No Shopping Cart data available" });

        if (shoppingCart.length == 0) {
            return response.status(200).json({ message: "Your Shopping Cart is empty right now", shoppingCart });
        }

        return response.status(200).json({ message: "Success", shoppingCart });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}

export async function removePurchase(request: Request, response: Response) {
    const shoppingCartId = Number(request.params.shoppingCartId);

    if (!shoppingCartId) return response.status(400).json({ error: "You must provide a Shopping Cart ID" });

    try {
        const result = await deletePurchase(shoppingCartId);

        if (!result) {
            return response.status(400).json({ error: "Couldn't be possible to remove the purchase" });
        }

        return response.status(200).json({ message: "Purchase successfully removed" });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}
