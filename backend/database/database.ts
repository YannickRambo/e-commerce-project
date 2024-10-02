import { config } from "dotenv";
import mysql, { ResultSetHeader, RowDataPacket } from "mysql2";

config();

const database = mysql.createPool({
    database: process.env.DATABASE,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
}).promise();

export async function registerClient(clientName: string, clientEmail: string) {
    const query = "INSERT INTO clients (clientName, clientEmail) VALUES (?,?)";

    try {
        const [response] = await database.query<ResultSetHeader>(query, [clientName, clientEmail]);
        return response.affectedRows;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }
}

export async function registerProduct(productName: string, productPrice: number, productDescription: string, productImage: string) {
    const query = "INSERT INTO products (productName, productPrice, productDescription, productImage) VALUES (?,?,?,?)";

    try {
        const [response] = await database.query<ResultSetHeader>(query, [productName, productPrice, productDescription, productImage]);
        return response.affectedRows;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }
}

export async function getClientByEmail(clientEmail: string) {
    const query = "SELECT * FROM clients WHERE clientEmail = (?)";

    try {
        const [response] = await database.query<RowDataPacket[]>(query, [clientEmail]);
        return response;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }
}

export async function getProducts() {
    const query = "SELECT * FROM products";

    try {
        const [response] = await database.query<RowDataPacket[]>(query);
        return response;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }
}

export async function getProductById(productId: number) {
    const query = "SELECT * FROM products WHERE productId = (?)";

    try {
        const [response] = await database.query<RowDataPacket[]>(query, productId);
        return response;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }
}

export async function validateClient(clientName: string, clientEmail: string) {
    const query = "SELECT * FROM clients WHERE clientName = (?) and clientEmail = (?)";

    try {
        const [response] = await database.query<RowDataPacket[]>(query, [clientName, clientEmail]);
        return response;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }
}

export async function addToShoppingCart(clientId: number, productId: number) {
    const query = "INSERT INTO shoppingCart (clientId, productId) VALUES (?,?)";

    try {
        const [response] = await database.query<ResultSetHeader>(query, [clientId, productId]);
        return response.affectedRows;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }
}

export async function getPurchaseById(clientId: number) {
    const query = "SELECT shoppingCartId, p.productId, productName, productPrice, productDescription, productImage FROM shoppingcart s INNER JOIN clients c ON s.clientId = c.clientId INNER JOIN products p ON s.productId = p.productId where c.clientId = (?)";

    try {
        const [response] = await database.query<RowDataPacket[]>(query, clientId);
        return response;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }
}

export async function deletePurchase(shoppingCartId: number) {
    const query = "DELETE FROM shoppingCart WHERE shoppingCartId = (?)";

    try {
        const [response] = await database.query<ResultSetHeader>(query, shoppingCartId);
        return response.affectedRows;
    } catch (error) {
        if(error instanceof Error) return error.message;
    }
}

