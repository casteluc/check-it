import React, { useState } from 'react'

import { signUp } from '../../../services/auth/signUp'
import { LoginContainer, Form, Button, RedirectLink } from '../style'


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
        <LoginContainer>
            <h3>Faça seu cadastro</h3>

            <Form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="name">Seu nome</label>
                    <input type="text" name="name" id="name" placeholder="Fulano de Tal" onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="email">Seu e-mail</label>
                    <input type="email" name="email" id="email"placeholder="email@website.com" onChange={handleChange}/>
                </div>
                
                <div className="password">
                    <label htmlFor="password">Sua senha</label>
                    <input type="password" name="password" id="password" placeholder="min. 6 carácteres" onChange={handleChange}/>
                </div>
                
                <div className="show-password">
                    <input type="checkbox" name="showPassword" id="showPassword"/>
                    <label htmlFor="showPassword">Mostrar senha</label>
                </div>

                <Button type="submit" value="cadastrar"/>
            </Form>

            <RedirectLink to="/login">Já tem uma conta? Entre aqui</RedirectLink>
        </LoginContainer>
    )
}

export default SignUpPage
