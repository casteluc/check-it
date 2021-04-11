import styled from 'styled-components'

export const HomePage = styled.section`
    max-width: 620px;
    margin: 0 auto;
    display: flex;
    /* align-items: center; */
    flex-direction: column;

    h2 {
        font-size: 2.5rem;
        text-align: center;
    }
`

export const InputForm = styled.form`
    display: flex;

    input {
        outline: none;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
    }

    input[type="text"] {
        width: 100%;
        background-color: #F0F0F0;
        padding: 5px 10px;
        border-radius: 3px
    }

    input[type="submit"] {
        color: #FAFAFA;
        background-color: #FD4E0C;
        padding: 5px 20px;
        margin-left: 5px;
    }
`