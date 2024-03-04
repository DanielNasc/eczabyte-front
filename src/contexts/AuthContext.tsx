import { createContext, useState } from "react";

interface AuthContextData {
    user: string;
    setUser: (user: string) => void;
}

export const AuthContext = createContext<AuthContextData>({
    user: '',
    setUser: () => { }
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState('');

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};