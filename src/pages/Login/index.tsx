import React, { useCallback, useState } from 'react';
import "./styles.css";
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const { signIn } = useAuth()

    const handleSubmit = useCallback(async (event: any) => {
        event.preventDefault();
       await signIn({username, password});
       history.push('/dashboard')
    }, [username, password]);
 

  return (
  <form className='container' onSubmit={handleSubmit}>
    <div className='form-group'>
        <label htmlFor=''>Usuário</label>
        <input type='text' onChange={e => setUsername(e.target.value)}/>
    </div>
    <div className='form-group'>
        <label htmlFor=''>Senha</label>
        <input  type='password'  onChange={e => setPassword(e.target.value)}/>
    </div>
    <div className='form-group'>
        <button type='submit'>Enter</button>
    </div>
  </form>
  )
}

export default Login;