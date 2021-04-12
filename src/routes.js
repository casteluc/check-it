import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { auth } from './firebase'
import Home from './pages/Home';
import Login from './pages/Login';

const CustomRoute = ({isPrivate, ...props}) => {
    if (isPrivate) {
        return <Redirect to="/login"/>
    }

    return <Route {...props}/>
}

function Routes({user}) {
    return(
        <BrowserRouter>
            <Switch>
                <CustomRoute exact user={user} path="/" component={Home}/>
                <CustomRoute exact user={user} path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
