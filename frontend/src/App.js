import React from 'react'
import {Route} from 'wouter';
import Details from './vistas/Details';
import PaginaPrincipal from './vistas/PaginaPrincipal';
import './App.css';
import BarraDeNavegacion from './componentes/BarraDeNavegacion';
import Login from './componentes/Formulario/index'
import ImportarArchivos from './componentes/Formulario/Importar-archivos';
import {UsuarioProvider} from './hooks/useContext';

function App() {
  return (
    <div className="App">
      <BarraDeNavegacion/>
      <UsuarioProvider>
      <Route  component={Login} path="/login"/>
      <Route 
      component={ImportarArchivos} path="/importar-archivos"
      />
      </UsuarioProvider>
      <Route 
      component={PaginaPrincipal} path="/pagina-principal"
    
      />
      
      <Route 
      component={Details} path="/pagina-principal/details"
      />
    
    
     
    </div>
  )
}

export default App;
