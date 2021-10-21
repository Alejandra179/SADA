import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../public/img/logo.png";
import "./style.css";

const BarraDeNavegacion = () => {
  return (
    
    <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
    <div className="container"><a className="navbar-brand" href="/"><img src={logo} style={{width: '30%', height: '20%'}} alt="logo-ipf"/></a><button data-bs-toggle="collapse" data-bs-target="#navcol-1" class="navbar-toggler"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/pagina-principal/details" style={{color:'black'}}>Detalles</a></li>
                
            </ul>
            <a className="btn btn-success action-button" role="button" href="/importar-archivos">Agregar Datos</a>
        </div>
    </div>
</nav>
  );
};

export default BarraDeNavegacion;
