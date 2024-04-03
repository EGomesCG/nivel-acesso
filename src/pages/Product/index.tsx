import React, { useCallback, useState } from 'react';
import "./styles.css";
import api from '../../service/api';

const Produto: React.FC = () => {
    const [ name, setName ] = useState('');
    const [ descricao, setDescricao ] = useState('');

    const handleSubmit = useCallback(async (e:any) => {
        e.preventDefault();
        const response = await api.post('/produto', { name, descricao });
        console.log("response", response);
    }, []);

  return (
    <form className='container' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor=''>Nome</label>
            <input type="text" onChange={e => setName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor=''>Descrição</label>
            <input type="text" onChange={e => setDescricao(e.target.value)}/>
        </div>
        <div className="form-group">
            <button type='submit'>Cadastrar</button>
        </div>
    </form>
  )
}

export default Produto;