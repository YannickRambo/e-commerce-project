import { Request, Response } from "express";
import { getClientByEmail, registerClient, validateClient } from "../database/database";
import { Client } from "../types/Client";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "dotenv";

config();

export async function registerNewClient(request: Request, response: Response) {
    const { clientName, clientEmail } = request.body;

    if (!clientName || !clientEmail) return response.status(400).json({ error: "Empty fields" });

    try {
        const validate = await getClientByEmail(clientEmail);

        if (!validate) return response.status(404).json({ error: "No client data available" });

        if (validate.length > 0) {
            return response.status(400).json({ error: "E-mail already registered" });
        }
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }

    try {
        const result = await registerClient(clientName, clientEmail);

        if (!result) {
            return response.status(400).json({ error: "Couldn't be possible to register the client" });
        }

        return response.status(201).json({ message: "Client sucessfully created" });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}

export async function verifyClient(request: Request, response: Response) {
    const { clientName, clientEmail } = request.body;

    if (!clientName || !clientEmail) return response.status(400).json({ error: "Empty fields" });

    try {
        const result = await validateClient(clientName, clientEmail);

        if (!result) return response.status(404).json({ error: "No client data available" });

        if (result.length == 0) {
            return response.status(404).json({ error: "Wrong name or e-mail" });
        }

        const client = result[0] as Client;

        const { clientId } = client;

        const token = jwt.sign({ clientId }, `${process.env.JWT_SECRET}`, { expiresIn: "1d" });

        response.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "strict"
        });

        return response.status(200).json({ message: "Success", clientId });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}

export async function authenticateClient(request: Request, response: Response) {
    const cookie = request.headers.cookie;

    if (!cookie) return response.status(401).json({ message: "Not authenticated" });

    const token = cookie.split("=")[1];

    try {
        const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`) as JwtPayload;
        const { clientId } = decodedToken;

        return response.status(200).json({ clientId });
    } catch (error) {
        return response.status(401).json({error: "Invalid token"})
    }
}
