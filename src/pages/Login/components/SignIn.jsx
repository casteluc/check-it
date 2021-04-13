import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { signIn, signInWithGoogle } from '../../../services/auth/signIn'

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
        signIn(credentials)
    }

    const handleGoogleLogin = (e) => {
        signInWithGoogle()
    }

    return (
        <div>
            <h3>Faça login</h3>
            
            <button onClick={handleGoogleLogin}>login with google</button>
            
            <form onSubmit={handleSignIn}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email"placeholder="email@website.com" onChange={handleChange}/>
                
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" placeholder="min. 6 carácteres" onChange={handleChange}/>
                
                <input type="checkbox" name="showPassword" id="showPassword"/>
                <label htmlFor="showPassword">Mostrar senha</label>

                <input type="submit" value="entrar"/>
            </form>

            <p onClick={() => {goToSignUp()}}>Ainda não tem uma conta? Registre-se aqui</p>
        </div>
    )
}

export default SignInPage
