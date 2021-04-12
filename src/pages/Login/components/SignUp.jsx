import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../../store/actions/user'

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
        props.signUp(credentials)
    }

    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={handleSignUp}>
                <input type="text" name="nickname" placeholder="nickname" value={credentials.nickname} onChange={handleChange}/>
                <input type="email" name="email" placeholder="email" value={credentials.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="senha" value={credentials.password} onChange={handleChange}/>
                <input type="password" name="passowd-confirmation" placeholder="confirmação de senha" onChange={handleChange}/>
                <input type="submit" value="Registrar"/>
            </form>
            <p onClick={() => {goToSignIn()}}>go to sign in</p>
        </div>
    )
}

export default connect(null, {signUp})(SignUpPage)
