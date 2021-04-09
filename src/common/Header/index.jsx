import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as LogoImage} from '../../assets/logo.svg'

const Header = () => {
    return (
        <header>
            <div></div> {/* temporary element, will be replaced by the dark mode button */}
            <div className="logo">
                <LogoImage/>
            </div>
            <nav>
                <ul>
                    <li>
                        {/* <Link>Perfil</Link> */}
                    </li>
                    <li>
                        {/* <Link>Início</Link> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
