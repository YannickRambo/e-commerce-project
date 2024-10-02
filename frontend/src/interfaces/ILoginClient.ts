import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export interface ILoginClient {
    clientName: string,
    clientEmail: string,
    setMessage: Dispatch<SetStateAction<string>>,
    setClientId: Dispatch<SetStateAction<number>>,
    navigate: NavigateFunction
}