import React, { useState } from 'react'

import signIn from '../../../auth/signIn'
import signInWithGoogle from '../../../auth/signInWithGoogle'

import Input from '../../../style/components/Input'
import { ReactComponent as GoogleImg} from '../../../assets/google.svg'
import { LoginContainer, FormField, RedirectLink, GoogleLogin, Divider, SignButton } from '../style'
import ShowPassword from '../components/ShowPassword'

const SignInPage = ({goToSignUp, ...props}) => {
    const credentialInitialState = { email: '', password: '' }
    const [credentials, setCredentials] = useState(credentialInitialState)

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleGoogleLogin = (e) => {
        signInWithGoogle()
    }
    
    const handleSignIn = (e) => {
        e.preventDefault()
        signIn(credentials)
    }

    return (
        <LoginContainer>
            <h3>Faça login</h3>
            
            <GoogleLogin fullWidth onlyBorder padding="15px 0" onClick={handleGoogleLogin}>
                <GoogleImg/>
                <p>Entre com o Google</p>
            </GoogleLogin>

            <Divider>
                <hr/>
                <p>ou entre com seu e-mail</p>
                <hr/>
            </Divider>
            
            <form onSubmit={handleSignIn}>
                <FormField>
                    <label htmlFor="email">E-mail</label>
                    <Input type="email" name="email" id="email"placeholder="email@website.com" onChange={handleChange}/>
                </FormField>
                
                <FormField className="password">
                    <label htmlFor="password">Senha</label>
                    <Input type="password" name="password" id="password" placeholder="min. 6 carácteres" onChange={handleChange}/>
                </FormField>
                
                <ShowPassword/>

                <SignButton fullWidth type="submit" value="entrar"/>
            </form>

            <RedirectLink to="/register">Ainda não tem uma conta? Registre-se aqui</RedirectLink>
        </LoginContainer>
    )
}

export default SignInPage
