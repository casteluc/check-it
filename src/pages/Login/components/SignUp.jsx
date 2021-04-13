import React, { useState } from 'react'

import { signUp } from '../../../services/auth/signUp'


const SignUpPage = ({goToSignIn, ...props}) => {
    const [credentials, setCredentials] = useState({
        nickname: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    
    const handleSignUp = (e) => {
        e.preventDefault()
        signUp(credentials)
        console.log("singed up")
    }

    return (
        <div>
            <h3>Faça seu cadastro</h3>
            
            <form onSubmit={handleSignUp}>
                <label htmlFor="name">Seu nome</label>
                <input type="email" name="email" id="email"placeholder="email@website.com" onChange={handleChange}/>
                
                <label htmlFor="email">Seu e-mail</label>
                <input type="email" name="email" id="email"placeholder="email@website.com" onChange={handleChange}/>
                
                <label htmlFor="password">Sua senha</label>
                <input type="password" name="password" id="password" placeholder="min. 6 carácteres" onChange={handleChange}/>
                
                <input type="checkbox" name="showPassword" id="showPassword"/>
                <label htmlFor="showPassword">Mostrar senha</label>

                <input type="submit" value="cadastrar"/>
            </form>

            <p onClick={() => {goToSignIn()}}>Já tem uma conta? Entre aqui</p>
        </div>
    )
}

export default SignUpPage
