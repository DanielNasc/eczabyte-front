import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface User {
    email: string;
    username: string;
}

interface AuthContextData {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}

export const AuthContext = createContext<AuthContextData>({
    user: undefined,
    setUser: () => { }
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id'); 

        if (token && id) {
            (async () => {
                const result = await axios.get(`http://localhost:3000/api/v1/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
    
                setUser(result.data)
            })()

        }
    }, [setUser]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};