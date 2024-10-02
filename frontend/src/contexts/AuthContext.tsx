import { createContext, useEffect, useState } from "react";
import { IAuthContext } from "../interfaces/IAuthContext";
import { AuthProviderProps } from "../types/AuthProviderProps";
import { verifyToken } from "../services/verifyToken";

const defaultContext = {
    clientId: 0,
    setClientId: () => { }
} as IAuthContext;

export const AuthContext = createContext(defaultContext);

export function AuthProvider({ children }: AuthProviderProps) {
    const [clientId, setClientId] = useState<number>(0);

    useEffect(() => {
        verifyToken(setClientId);
    }, []);

    return (
        <AuthContext.Provider value={{ clientId, setClientId }}>
            {children}
        </AuthContext.Provider>
    );
}
