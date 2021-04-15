import styled from'styled-components'
import { Link } from 'react-router-dom'
import Input from '../../style/components/Input'
import Button from '../../style/components/Button'

export const LoginContainer = styled.div`
    max-width: 400px;
    margin: 30px auto 0 auto;

    h3 {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 25px;
    }
`

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    
    &.password {
        margin-bottom: 0px;
    }
    
    label {
        font-weight: 500;
        margin: 3px 0
    }
`

export const GoogleLogin = styled(Button)`
    * {
        margin: 0 5px;
    }
`

export const RedirectLink = styled(Link)`
    display: block;
    text-align: right;
    font-size: 0.857rem;
    color: #929292;
` 

export const Divider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;

    p {
        width: 100%;
        min-width: 12.1rem;
        font-size: 0.857rem;
        color: #929292;
        text-align: center;
    }

    hr {
        display: inline;
        border-top: 1px solid #c4c4c4;
        width: 100%;
    }
`

export const SignButton = styled(Input)`
    &[type="submit"] {
        padding: 10px 20px;
        margin-top: 15px;
        font-weight: 500;
    }
`

export const ShowPasswordContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0;

    label {
        margin: 0 5px;
        color: #7B7B7B;
        user-select: none;
    }
`