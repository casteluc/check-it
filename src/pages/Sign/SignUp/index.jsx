import React, { useState } from 'react'

import signUp from '../../../auth/signUp'

import Input from '../../../style/components/Input'
import { SignContainer, FormField, RedirectLink, SignButton, ShowPasswordContainer } from '../style'


const SignUpPage = ({goToSignIn, ...props}) => {
    const credentialInitialState = { name: '', email: '', password: ''}
    const [credentials, setCredentials] = useState(credentialInitialState)
    const [showPassword, setShowPassword] = useState(false)
    
    const toggleshowPassword = (e) => { setShowPassword(e.target.checked) }
    const handleChange = (e) => { setCredentials({...credentials, [e.target.name]: e.target.value}) }
    const handleSignUp = (e) => {
        e.preventDefault()
        signUp(credentials)
    }

    return (
        <SignContainer>
            <h3>Faça seu cadastro</h3>

            <form onSubmit={handleSignUp}>
                <FormField>
                    <label htmlFor="name">Seu nome</label>
                    <Input type="text" name="name" id="name" placeholder="Fulano de Tal" onChange={handleChange}/>
                </FormField>

                <FormField>
                    <label htmlFor="email">Seu e-mail</label>
                    <Input type="email" name="email" id="email"placeholder="email@website.com" onChange={handleChange}/>
                </FormField>
                
                <FormField className="password">
                    <label htmlFor="password">Sua senha</label>
                    <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="min. 6 carácteres" onChange={handleChange}/>
                </FormField>
                
                <ShowPasswordContainer className="show-password">
                    <input checked={showPassword} onChange={toggleshowPassword} type="checkbox" name="showPassword" id="showPassword"/>
                    <label htmlFor="showPassword">Mostrar senha</label>
                </ShowPasswordContainer>

                <SignButton fullWidth type="submit" value="cadastrar"/>
            </form>

            <RedirectLink to="/login">Já tem uma conta? Entre já</RedirectLink>
        </SignContainer>
    )
}

export default SignUpPage
