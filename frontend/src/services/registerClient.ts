import { FormEvent } from "react";
import { IRegisterClient } from "../interfaces/IRegisterClient";

export async function registerClient(event: FormEvent, {clientName, clientEmail, setMessage, navigate}: IRegisterClient) {
    event.preventDefault();

    const client = { clientName, clientEmail };

    try {
        const response = await fetch("http://localhost:5000/register-client", {
            method: "POST",
            body: JSON.stringify(client),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            const { error } = await response.json();
            setMessage(error);
            return;
        }

        navigate("/login");
    } catch (error) {
        if (error instanceof Error) setMessage(error.message);
    }
}