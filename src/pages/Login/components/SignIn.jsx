import React from 'react'

const SignIn = ({goToSignUp}) => {
    const handleSignIn = (e) => {
        e.preventDefault()
        console.log("sign in")
    }

    const handleGoogleLogin = (e) => {
        console.log("sign in with google")
    }

    return (
        <div>
            <h3>Sign In</h3>
            <form onSubmit={handleSignIn}>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="senha"/>
                <input type="submit" value="Registrar"/>
            </form>
            <button onClick={handleGoogleLogin}>login with google</button>
            <p onClick={() => {goToSignUp()}}>go to sign up</p>
        </div>
    )
}

export default SignIn
