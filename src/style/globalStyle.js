import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Poppins, Open-Sans, sans-serif;
        color: #252422;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }
    
    :root {
        font-size: 14px;
    }

    input, button {
        font-size: 1rem;
    }

    body {
        margin: 0;
        padding: 0;
        background: #fafafa;
    }
`

export default GlobalStyle