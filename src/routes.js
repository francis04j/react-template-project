import React from 'react';
import { Switch } from 'react-router-dom';
import App from './App';
import PublicRoute from './components/common/PublicRoute';
import Home from './home';
import Stuff from './stuff';
import createUser from './components/user/createUserPage';


const routes = (
    <App>
        <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute path="/about" title="About" component={Stuff} />

           
            <PublicRoute
                path="/account/register"
                title="Register"
                component={createUser}
            />           
        </Switch>
    </App>
);

export default routes;