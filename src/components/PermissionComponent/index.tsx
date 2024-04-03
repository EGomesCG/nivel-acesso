import React, { useEffect, useState } from 'react'
import api from '../../service/api';

interface IPermissionComponentProps{
    role: string;
    children: JSX.Element;
}

const PermissionComponent: React.FC<IPermissionComponentProps> = ({children, role}:IPermissionComponentProps) => {
    const [permission, setPermission] = useState([] as string[]);
    useEffect(() => {
        async function loadRoules() {
            const response = api.get('/users/roles');
            const findRole = ((await response).data.some((r:string) => role?.split(",").includes(r)))
            setPermission(findRole);            
        }
        loadRoules();
    },[])
    
  return (
    <>
    {permission && children}
    </>
  )
}

export default PermissionComponent;