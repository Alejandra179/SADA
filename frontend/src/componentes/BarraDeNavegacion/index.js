import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../public/img/logo.png';
import {Link} from 'wouter'
import './style.css';

const BarraDeNavegacion = () => {
    return (
        <div id="navegador">
            <nav className="navbar navbar-expand-md navbar-light">
                <div  className="navbar-brand">
                    <img src={logo} alt="logo"
                    style={{width:'30%',height:'20%'}}
                    className="d-inline-block align-top w-3"/>
                    </div>
                <button
                 className="navbar-toggler"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#toggleMobileMenu"
                 aria-controls="toggleMobileMenu"
                 aria-expanded="false"
                 aria-label="Toggle naviagtion"

                >
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav ms-auto text-center">
                        <li>
                            <a className="nav-link" href="/">SADA</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/pagina-principal/details">Detalles</a>
                        </li>
                        <li>
                            <a className="nav-link">
                                <Link to="/importar-archivos">Agregar Datos
                                </Link></a>
                        </li>
                    </ul>

                </div>
            </nav>
            <div clasName="row">
                <div className="col-12 pb-1">
ffkfkf
                </div>

            </div> <br/>
            

        </div>
       
        
    );
}

export default BarraDeNavegacion;
