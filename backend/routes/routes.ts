import express from "express";
import { authenticateClient, registerNewClient, verifyClient } from "../controllers/clientController";
import { getAllProducts, getProduct, registerNewProduct } from "../controllers/productController";
import { getAllProductsById, registerPurchase, removePurchase } from "../controllers/shoppingCartController";

export const routes = express.Router();

routes.post("/register-client", registerNewClient);
routes.post("/register-product", registerNewProduct);
routes.get("/products", getAllProducts);
routes.get("/products/:productId", getProduct);
routes.post("/login", verifyClient);
routes.get("/authenticate", authenticateClient);
routes.post("/purchase", registerPurchase);
routes.get("/shopping-cart/:clientId", getAllProductsById);
routes.delete("/shopping-cart/:shoppingCartId", removePurchase);
