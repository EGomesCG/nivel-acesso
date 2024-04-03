import React, { useEffect, useState } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import api from "../service/api";

interface RoutesProposData extends RouteProps{
    role?: string;
}

const PrivateRoutes: React.FC<RoutesProposData> = ({role, ...rest}) =>  {
    const [ permission, setPermission ] = useState([] as string[])
    const { userLogged } = useAuth();
    
    useEffect(() => {
        async function loadRoules() {
            const response = api.get('/users/roles');
            const findRole = ((await response).data.some((r:string) => role?.split(",").includes(r)))
            setPermission(findRole);            
        }
        loadRoules();
    },[])

    if(!userLogged()){
        return <Redirect to="/"/>;
    }
    if(!role && userLogged()){
        return <Route {...rest}/>
    }

    return(
        permission ?  <Route {...rest} /> : <Redirect to="/"/>
    )
}

export default PrivateRoutes;