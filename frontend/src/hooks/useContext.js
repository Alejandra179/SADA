import React, { useState } from 'react';
const UsuarioContext = React.createContext({});

export function UsuarioProvider({children}){

    const [jwt,setJwt]=  useState(
        () => window.sessionStorage.getItem('jwt')
      )
    

    return <UsuarioContext.Provider value={{jwt, setJwt}}>
        {children}
    </UsuarioContext.Provider>
}

export default UsuarioContext