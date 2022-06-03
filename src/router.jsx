import React from 'react';
import {Route, Router, Redirect} from 'react-router';
import HomePage from '../imports/components/homepage/homePage';
import {createBrowserHistory} from 'history';


const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <Route path="/" component={HomePage}/>
        </div>
    </Router>
);