import React from 'react'

import { auth } from '../../firebase'
import signOut from '../../auth/signOut'

import Button from '../../style/components/Button'
import { HeaderContainer, LogoutButton } from './style'
import {ReactComponent as LogoImage} from '../../assets/logo.svg'

const Header = () => {
    const user = auth.currentUser

    return (
        <HeaderContainer>
            {/* DARK MODE BUTTON GOES HERE */}

            <div className="logo">
                <LogoImage/>
                <h1>Check-It</h1> 
            </div>

            {user && <Button onlyBorder padding="5px 30px" onClick={() => {signOut()}}>sair</Button>}
            {/* <LogoutButton onClick={() => {signOut()}}>sair</LogoutButton> */}
            {/* NAV ELEMENT GOES HERE */}

        </HeaderContainer>
    )
}

export default Header
