import React from "react";
import { Route } from "wouter";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Details from "./vistas/Details";
import PaginaPrincipal from "./vistas/PaginaPrincipal";
import "./App.css";
import Login from "./componentes/Formulario/index";
import ImportarArchivos from "./componentes/Formulario/Importar-archivos";
import { UsuarioProvider } from "./hooks/useContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <UsuarioProvider>
        <Route path="/login" component={Login}  />

        <Route path="/importar-archivos"  component={ImportarArchivos} />
      </UsuarioProvider>

      <Route path="/" component={PaginaPrincipal} />

      <Route path="/details" component={Details} />

        </Switch>
     

      </Router>
     
     
    </div>
  );
}

export default App;
