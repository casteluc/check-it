import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { auth } from './firebase'
import Home from './pages/Home';
import Login from './pages/Login';

const CustomRoute = ({isPrivate, user, ...props}) => {
    console.log(user)
    if (!user.user && isPrivate) {
        return <Redirect to="/login"/>
    }

    return <Route {...props}/>
}

function Routes({user}) {
    return(
        <BrowserRouter>
            <Switch>
                <CustomRoute exact isPrivate user={user} path="/" component={Home}/>
                <CustomRoute exact user={user} path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps)(Routes)
