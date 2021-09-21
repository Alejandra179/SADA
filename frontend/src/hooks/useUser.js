import { useCallback,useContext,useState } from "react";
import UsuarioContext from './useContext';
import loginService from '../services/login'
export default function useUser(){
    const {jwt} = useContext(UsuarioContext);
    const [$jwt,setJwt]= useState(jwt)
    const login = useCallback(async({username, password})=>{
        let loginRes = await loginService({username, password})
        
        try {
            if(!loginRes.message){
                window.sessionStorage.setItem('jwt', loginRes)
                setJwt(loginRes)
            }else{
                const res = loginRes.message
                return res
            }
            
          
        } catch (err) {
            window.sessionStorage.removeItem('jwt')
            console.log(err)
            
        }
        
          
    },[setJwt])
    
    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJwt(null)
    },[setJwt])
    return (
        {
        isLogged: Boolean($jwt),
        login,
        logout
        }
    )
}