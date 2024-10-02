import { FormEvent } from "react";
import { ILoginClient } from "../interfaces/ILoginClient";

export async function loginClient(event: FormEvent, { clientName, clientEmail, setMessage, setClientId, navigate }: ILoginClient) {
    event.preventDefault();

    const client = { clientName, clientEmail };

    try {
        const response = await fetch("http://localhost:5000/login", {
            credentials: "include",
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

        const { clientId } = await response.json();
        setClientId(clientId);

        navigate("/");
    } catch (error) {
        if (error instanceof Error) setMessage(error.message);
    }
}