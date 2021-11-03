import React from "react";
import { Route } from "wouter";
import Details from "./vistas/Details";
import PaginaPrincipal from "./vistas/PaginaPrincipal";
import "./App.css";
import Login from "./componentes/Formulario/index";
import ImportarArchivos from "./componentes/Formulario/Importar-archivos";
import { UsuarioProvider } from "./hooks/useContext";

function App() {
  return (
    <div className="App">
     
      <UsuarioProvider>
        <Route component={Login} path="/login" />

        <Route component={ImportarArchivos} path="/importar-archivos" />
      </UsuarioProvider>

      <Route component={PaginaPrincipal} path="/" />

      <Route component={Details} path="/details" />
    </div>
  );
}

export default App;
