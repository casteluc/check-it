import styled from 'styled-components'

export const HomeContainer = styled.section`
    max-width: 620px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2.5rem;
        text-align: center;
        margin: 30px 0
    }
`

export const Form = styled.form`
    display: flex;
    margin: 10px 0;

    input {
        padding: 5px 10px;
        border-radius: 3px;
    }

    input[type="text"] {
        width: 100%;
        background-color: #F0F0F0;
    }

    input[type="submit"] {
        color: #FAFAFA;
        background-color: #FD4E0C;
        padding: 5px 20px;
        margin-left: 5px;
        font-weight: 500;
    }
`