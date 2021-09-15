import { useCallback,useContext } from "react";
import UsuarioContext from './useContext';
import loginService from '../services/login'
export default function useUser(){
    const {jwt,setJwt} = useContext(UsuarioContext);
    const login = useCallback(async ({username, password})=>{
        let loginRes = await loginService({username, password})
        .then( jwt =>{
            if(!jwt.message){
                window.sessionStorage.setItem('jwt', jwt)
                setJwt(jwt)
               
            }else{
                const res = jwt.message
                return res
            }
            
        })
        .catch(err=>{
            window.sessionStorage.removeItem('jwt')
            console.log(err)
        })
        return loginRes
    },[setJwt])
    
    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJwt(null)
    },[setJwt])
    return (
        {
        isLogged: Boolean(jwt),
        login,
        logout
        }
    )
}