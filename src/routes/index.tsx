
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Produto from "../pages/Product";
import ListaProduto from "../pages/ListaProduto";

const Routes = () => {
    return(
    <Switch>
        <Route path="/" exact component={Login}/>
        <PrivateRoutes path="/dashboard" component={Dashboard}/>
        <PrivateRoutes path="/produto" component={Produto} role="ROLE_ADMIN" />
        <PrivateRoutes path="/ListaProduto" component={ListaProduto} role="ROLE_ADMIN,ROLE_USER" />
    </Switch>
    )
}

export default Routes;