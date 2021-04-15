import styled from 'styled-components'

const Input = styled.input`
    padding: 5px 10px;
    border-radius: 3px;
    background-color: #F0F0F0;
    ${props => props.fullWidth ? "width: 100%;":""}
    
    &[type="submit"] {
        color: #FAFAFA;
        font-weight: 400;
        padding: 5px 20px;
        background: linear-gradient(to bottom right, #EE4200, #FF5716, #FF7F4F);
        cursor: pointer;
    }
`

export default Input