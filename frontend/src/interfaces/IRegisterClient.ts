import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export interface IRegisterClient {
    clientName: string,
    clientEmail: string,
    setMessage: Dispatch<SetStateAction<string>>,
    navigate: NavigateFunction
}