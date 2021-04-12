import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import signIn from '../../../services/auth/signIn'

const SignInPage = ({goToSignUp, ...props}) => {
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(signIn(credentials))
        console.log("singed in")
    }

    const handleGoogleLogin = (e) => {
        console.log("sign in with google")
    }

    return (
        <div>
            <h3>Sign In</h3>
            <form onSubmit={handleSignIn}>
                <input type="email" name="email" placeholder="email" onChange={handleChange}/>
                <input type="password" name="password" placeholder="senha" onChange={handleChange}/>
                <input type="submit" value="Registrar"/>
            </form>
            <button onClick={handleGoogleLogin}>login with google</button>
            <p onClick={() => {goToSignUp()}}>go to sign up</p>
        </div>
    )
}

export default SignInPage
