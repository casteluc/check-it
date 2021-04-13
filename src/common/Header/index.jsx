import React from 'react'

import { auth } from '../../firebase'
import { signOut } from '../../services/auth/signOut'

import { HeaderContainer, LogoutButton } from './style'
import {ReactComponent as LogoImage} from '../../assets/logo.svg'
import { useEffect } from 'react'
import { useState } from 'react'

const Header = () => {
    const user = auth.currentUser

    return (
        <HeaderContainer>
            {/* DARK MODE BUTTON GOES HERE */}

            <div className="logo">
                <LogoImage/>
                <h1>Check-It</h1> 
            </div>

            {user && <LogoutButton onClick={() => {signOut()}}>sair</LogoutButton>}
            {/* <LogoutButton onClick={() => {signOut()}}>sair</LogoutButton> */}
            {/* NAV ELEMENT GOES HERE */}

        </HeaderContainer>
    )
}

export default Header
