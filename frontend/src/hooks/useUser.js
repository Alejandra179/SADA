import { useCallback,useContext} from "react";
import UsuarioContext from './useContext';
import loginService from '../services/login'

export default function useUser(){
    const {jwt,setJwt} = useContext(UsuarioContext);
    console.log({jwt})

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
    
   
    return (
        {
        isLogged: Boolean(jwt),
        login,
        
        }
    )
}