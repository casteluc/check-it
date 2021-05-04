import styled from 'styled-components'

const Button = styled.button`
    background-color: #F0F0F0;
    border-radius: 3px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${props => props.padding};
    transition: border 0.2s;
    ${props => props.fullWidth ? "width: 100%;":""}

    ${props => props.onlyBorder && `
        background-color: transparent;
        border: 1px solid #C4C4C4;
        font-weight: 600
    `};

    &:hover { border-color: #999; }
    &:active { border-color: #333; }

`

export default Button