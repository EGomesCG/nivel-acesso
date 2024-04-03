import React, { useEffect, useState } from 'react'
import api from '../../service/api';
import PermissionComponent from '../../components/PermissionComponent';
import { useHistory } from 'react-router-dom';

interface IListaProduto {
    id:string;
    name:string;
    descricao:string;
}

const ListaProduto: React.FC = () => {
    const [ produto, setProduto] = useState<IListaProduto[]>([] as IListaProduto[]);

    const history = useHistory();

    useEffect(() => {
        api.get('products').then(response => setProduto(response.data))
    },[]);

  return (
    <div>
        <h3>Listagem de produtos</h3>
        <div>
            <PermissionComponent role={"ROLE_ADMIN"}>
                <button onClick={() => history.push('/produto')}>Cadastrar Produto</button>
            </PermissionComponent>
            {produto.map(item => (
                <div key={item.id}>
                    <span>ID: {item.id}</span>
                    <br/>
                    <span>Nome: {item.name}</span>
                    <br/>
                    <span>Descrição: {item.descricao}</span>
                    <br/>
                    <hr/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default  ListaProduto;