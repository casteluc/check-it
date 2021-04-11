import React from 'react'

const SignUp = ({goToSignIn}) => {
    const handleSignUp = (e) => {
        e.preventDefault()
        console.log("sign up")
    }

    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={handleSignUp}>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="senha"/>
                <input type="password" name="passowd-confirmation" placeholder="confirmação de senha"/>
                <input type="submit" value="Registrar"/>
            </form>
            <p onClick={() => {goToSignIn()}}>go to sign in</p>
        </div>
    )
}

export default SignUp
