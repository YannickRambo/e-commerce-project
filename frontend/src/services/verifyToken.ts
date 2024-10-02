import { Dispatch, SetStateAction } from "react";

export async function verifyToken(setClientId: Dispatch<SetStateAction<number>>) {
    try {
        const response = await fetch("http://localhost:5000/authenticate", {
            credentials: "include"
        });

        if (!response.ok) {
            return;
        }

        const { clientId } = await response.json();

        setClientId(clientId);
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
    }
}