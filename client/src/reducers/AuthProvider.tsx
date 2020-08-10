import React, { useEffect, useState } from "react";
type ContextProps = {
    user: any;
    authenticated: boolean;
    setUser: any;
    loadingAuthState: boolean;
};
export const AuthContext = React.createContext<Partial<ContextProps>>({
    user: null,
    authenticated: false,
    setUser: null,
});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);
    useEffect(() => {
        // firebase.auth().onAuthStateChanged((user: any) => {
        //     setUser(user);
        //     setLoadingAuthState(false);
        // });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated: user !== null,
                setUser,
                loadingAuthState
            }}>
            {children}
        </AuthContext.Provider>
    );
}