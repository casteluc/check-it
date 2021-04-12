import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import firebase from './firebase'

import Home from './pages/Home';
import Login from './pages/Login';

const CustomRoute = ({isPrivate, ...props}) => {
    const user = firebase.auth().currentUser;
    
    if (isPrivate && !user) {
        return <Redirect to="/login"/>
    }

    if (user && !isPrivate) {
        return <Redirect to="/"/>
    }

    return <Route {...props}/>
}

function Routes({user}) {
    return(
        <BrowserRouter>
            <Switch>
                <CustomRoute isPrivate exact user={user} path="/" component={Home}/>
                <CustomRoute exact user={user} path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
