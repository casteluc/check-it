import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 10px #ddd;

    .logo {
        display: flex;
        align-items: center;

        svg, h1 {
            margin: 2px;
        }

        svg {
            max-width: 18px;
        }
        h1 {
            font-size: 1.3rem;
        }
    }
`