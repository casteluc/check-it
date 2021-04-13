import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../common/Header';

import { auth } from '../firebase'

import Home from './Home';
import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';


const CustomRoute = ({isPrivate, ...props}) => {
    const user = auth.currentUser;
    
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
            <Header/>
            <Switch>
                <CustomRoute isPrivate exact path="/" component={Home}/>
                <CustomRoute exact path="/login" component={SignIn}/>
                <CustomRoute exact path="/register" component={SignUp}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
