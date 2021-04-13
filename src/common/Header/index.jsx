import React from 'react'

import { signOut } from '../../services/auth/signOut'

import { HeaderContainer, LogoutButton } from './style'
import {ReactComponent as LogoImage} from '../../assets/logo.svg'

const Header = () => {
    return (
        <HeaderContainer>
            {/* DARK MODE BUTTON GOES HERE */}

            <div className="logo">
                <LogoImage/>
                <h1>Check-It</h1> 
            </div>

            <LogoutButton onClick={() => {signOut()}}>sair</LogoutButton>
            {/* NAV ELEMENT GOES HERE */}

        </HeaderContainer>
    )
}

export default Header
