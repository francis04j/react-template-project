import React from 'react';
import { Route } from 'react-router';

const PublicRoute = ({ component: Component, title, ...rest }) => {
    document.title = title ? `${title} // Halcyon` : 'Halcyon';

    return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PublicRoute;
