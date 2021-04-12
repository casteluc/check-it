import React, { useState } from 'react'

const SignInPage = ({goToSignUp, ...props}) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSignIn = (e) => {
        e.preventDefault()
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
