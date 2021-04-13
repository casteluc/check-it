import React, { useState } from 'react'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const Login = (props) => {
    const [registered, setRegistered] = useState(true)

    const toggleRegistered = () => {
        setRegistered(!registered)
    }
    
    return (
        <div>
            {registered ? 
                <SignIn goToSignUp={toggleRegistered}/> 
                : 
                <SignUp goToSignIn={toggleRegistered}/> 
            }
        </div>
    )
}

export default Login 
