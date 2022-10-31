import { createContext,useContext,useReducer } from "react";
import {CREATE,UPDATE,DELETE} from './actions'
import reducer from './reducer'

const AppContext = createContext()

const initialState ={

}
export const AppProvider = ({children}) => {
    
    //reducer (1)
    const [state, dispatch] = useReducer(reducer,initialState)

    const createEstacion = () => dispatch({type:CREATE, payload: 'create from context'})
    const updateEstacion = () => dispatch({type:UPDATE, payload: 'update from context'})
    const deleteEstacion = () => dispatch({type:DELETE, payload: 'delete from context'})
    
    return  ( 
         <AppContext.Provider value={
            {
                estaciones: state.estacion,
                createEstacion,
                updateEstacion,
                deleteEstacion,
                dispatch
            }
         }>
            {children}
         </AppContext.Provider>
    )
}
export const useAppContext = () => {
      return useContext(AppContext)
}