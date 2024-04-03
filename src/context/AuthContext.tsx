import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../service/api";

export type AuthContextProvider = {
	children: JSX.Element;
};

interface IAuthContext{
    token:ITokenState;
    signIn({ username, password }: IUserData) : Promise<void>;
    userLogged():boolean;
}

interface IUserData{
    username: string;
    password:string;
}

interface ITokenState{
    token: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({children}:AuthContextProvider) => {
    const [ token, setToken ] = useState<ITokenState>(() => {
        const token = localStorage.getItem("@PermissionYT:token");
        if(token){
            api.defaults.headers.authorization = `Bearer ${token}`;
            return { token }
        }
        return {} as ITokenState;
    });
    const signIn = useCallback(async ({ username, password}: IUserData) => {
        const response = await api.post('/sessions', {username,password});
        console.log("response", response.data);
        
        const { token } = response.data;
        setToken(token);
        localStorage.setItem("@PermissionYT:token", token); 
        api.defaults.headers.authorization = `Bearer ${token}`;
    },[]);

    const userLogged = useCallback(() => {
        const token = localStorage.getItem("@PermissionYT:token"); 
        if(token) {
            return true;
        } else{
            return false;
        }
    }, []);

    return(
    <AuthContext.Provider value={{token, signIn, userLogged}}>
        {children}
    </AuthContext.Provider>
    );
}
//Posso retornar uma função
function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context
}
export { useAuth, AuthProvider};