import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { auth } from './firebase'
import Home from './pages/Home';

const CustomRoute = ({isPrivate, ...props}) => {
    const [user] = useAuthState(auth);

    if (!user && isPrivate) {
        return <Redirect to="/login"/>
    }

    return <Route {...props}/>
}

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <CustomRoute exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
