import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Poppins, Open-Sans, sans-serif;
        color: #252422;
    }
    
    body {
        margin: 0;
        padding: 0;
        background: #fafafa;
    }
`

export default GlobalStyle