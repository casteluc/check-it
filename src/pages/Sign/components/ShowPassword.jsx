import React from 'react'

import { ShowPasswordContainer } from '../style'

const ShowPassword = () => {
    return (
        <ShowPasswordContainer className="show-password">
            <input type="checkbox" name="showPassword" id="showPassword"/>
            <label htmlFor="showPassword">Mostrar senha</label>
        </ShowPasswordContainer>

    )
}

export default ShowPassword
