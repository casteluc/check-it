import React, { useState } from 'react'

import signIn from '../../../auth/signIn'
import signInWithGoogle from '../../../auth/signInWithGoogle'

import Input from '../../../style/components/Input'
import { ReactComponent as GoogleImg} from '../../../assets/google.svg'
import { SignContainer, FormField, RedirectLink, GoogleLogin, Divider, SignButton, ShowPasswordContainer } from '../style'

const SignInPage = ({goToSignUp, ...props}) => {
    const credentialInitialState = { email: '', password: '' }
    const [credentials, setCredentials] = useState(credentialInitialState)
    const [showPassword, setShowPassword] = useState(false)
    
    const toggleshowPassword = (e) => { setShowPassword(e.target.checked) }
    const handleChange = (e) => { setCredentials({...credentials, [e.target.name]: e.target.value}) }
    const handleGoogleLogin = (e) => { signInWithGoogle() }
    const handleSignIn = (e) => {
        e.preventDefault()
        signIn(credentials)
    }

    
    return (
        <SignContainer>
            <h3>Faça login</h3>
            
            <GoogleLogin fullWidth onlyBorder padding="10px 0" onClick={handleGoogleLogin}>
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
                    <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="min. 6 carácteres" onChange={handleChange}/>
                </FormField>
                
                <ShowPasswordContainer className="show-password">
                    <input type="checkbox" name="showPassword" id="showPassword" checked={showPassword} onChange={toggleshowPassword}/>
                    <label htmlFor="showPassword">Mostrar senha</label>
                </ShowPasswordContainer>

                <SignButton fullWidth type="submit" value="entrar"/>
            </form>

            <RedirectLink to="/register">Ainda não tem uma conta? Registre-se aqui</RedirectLink>
        </SignContainer>
    )
}

export default SignInPage
