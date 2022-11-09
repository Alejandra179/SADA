import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const LoginScreen = () => {

    const { user } = useContext(AuthContext);

    return (
        <>

            <div>LoginScreen</div>
            <hr />

            {
                JSON.stringify(user, null, 3)
            }

        </>
    )
}
