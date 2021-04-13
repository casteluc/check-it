import React, { useState } from 'react'

import { signIn, signInWithGoogle } from '../../../services/auth/signIn'

import { ReactComponent as GoogleImg} from '../../../assets/google.svg'
import { LoginContainer, Form, Button, RedirectLink, GoogleLogin, Divider } from '../style'

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
        <LoginContainer>
            <h3>Faça login</h3>
            
            <GoogleLogin onClick={handleGoogleLogin}>
                <GoogleImg/>
                <p>Entre com o Google</p>
            </GoogleLogin>

            <Divider>
                <hr/>
                <p>ou entre com seu e-mail</p>
                <hr/>
            </Divider>
            
            <Form onSubmit={handleSignIn}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email"placeholder="email@website.com" onChange={handleChange}/>
                </div>
                
                <div className="password">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="min. 6 carácteres" onChange={handleChange}/>
                </div>
                
                <div className="show-password">
                    <input type="checkbox" name="showPassword" id="showPassword"/>
                    <label htmlFor="showPassword">Mostrar senha</label>
                </div>

                <Button type="submit" value="entrar"/>
            </Form>

            <RedirectLink to="/register">Ainda não tem uma conta? Registre-se aqui</RedirectLink>
        </LoginContainer>
    )
}

export default SignInPage
