import React from 'react'

import {ReactComponent as LogoImage} from '../../assets/logo.svg'

const Home = () => {
    return (
        <header>
            <div></div> {/* temporary element, will be replaced by the dark mode button */}
            <div className="logo">
                <LogoImage/>
            </div>
            <nav>
                <ul>
                    <li>Perfil</li>
                    <li>Início</li>
                </ul>
            </nav>
        </header>
    )
}

export default Home
