import { createContext, ReactNode, useState } from "react";
import { UserProps } from "../types/user.types";

interface AuthContextData {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignIn) => Promise<void>;
}

interface SignIn {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignIn) {
        console.log("Vamo logar");
        console.log({email, password});
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}