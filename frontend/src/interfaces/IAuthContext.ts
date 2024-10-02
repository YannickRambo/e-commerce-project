import { Dispatch } from "react";

export interface IAuthContext {
    clientId: number,
    setClientId: Dispatch<React.SetStateAction<number>>
}