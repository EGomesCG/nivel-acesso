import React from 'react'
import PermissionComponent from '../../components/PermissionComponent';

const Dashboard: React.FC = () => {
  return(
  <div>
    <h3>Menu</h3>
    <ul>
      <PermissionComponent role={'ROLE_ADMIN'}>
        <li>
          <a href='/produto'>Cadastro de produto</a>
        </li>
      </PermissionComponent>
        <li>
          <a href='/ListaProduto'>Listagem de produto</a>
        </li>
    </ul>
  </div>
  )
}

export default Dashboard;