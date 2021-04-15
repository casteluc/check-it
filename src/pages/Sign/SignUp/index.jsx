import React, { useState } from 'react'

import signUp from '../../../auth/signUp'

import Input from '../../../style/components/Input'
import ShowPassword from '../components/ShowPassword'
import { LoginContainer, FormField, RedirectLink, SignButton } from '../style'


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
                    <Input type="password" name="password" id="password" placeholder="min. 6 carácteres" onChange={handleChange}/>
                </FormField>
                
                <ShowPassword/>

                <SignButton fullWidth type="submit" value="cadastrar"/>
            </form>

            <RedirectLink to="/login">Já tem uma conta? Entre já</RedirectLink>
        </LoginContainer>
    )
}

export default SignUpPage
