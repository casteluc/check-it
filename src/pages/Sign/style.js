import styled from'styled-components'
import { Link } from 'react-router-dom'

export const LoginContainer = styled.div`
    max-width: 400px;
    margin: 30px auto 0 auto;

    h3 {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 25px;
    }
`

export const Form = styled.form`
    
    div {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        
        &.password {
            margin-bottom: 0px;
        }

        &.show-password {
            flex-direction: row;
            align-items: center;
            margin: 5px 0;

            label {
                margin: 0 5px;
                color: #7B7B7B;
                user-select: none;
            }
        }
        label {
            font-weight: 500;
            margin: 3px 0
        }

        input {
            padding: 5px 10px;
            border-radius: 3px;
            background-color: #F0F0F0;
            box-sizing: border-box;
        }
    }
`

export const Button = styled.input`
    padding: 10px 20px;
    width: 100%;
    border-radius: 3px;
    font-weight: 500;
    color: #fafafa;
    margin: 15px 0 5px 0;
    background: linear-gradient(to bottom right, #EE4200, #FF5716, #FF7F4F);
`

export const GoogleLogin = styled.button`
    width: 100%;
    background-color: transparent;
    border: 1px solid #C4C4C4;
    border-radius: 3px;
    padding: 10px 0;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

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
