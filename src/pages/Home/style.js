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

    input[type="submit"] {
        margin-left: 5px;
    }
`