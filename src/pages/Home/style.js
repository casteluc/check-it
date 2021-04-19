import styled from 'styled-components'
import Button from '../../style/components/Button'

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

export const FadeBar = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    background: linear-gradient(to top, #fafafa, transparent);
    bottom: 0;
    left: 0;
`

export const RefreshButton = styled(Button)`
    margin-left: 5px;

    svg path { fill: #6d6d6d; transition: all 0.2s; }
    &:hover { svg path { fill: #FD4E0C; }}
`
