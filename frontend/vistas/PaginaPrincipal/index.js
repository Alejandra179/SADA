import React from "react";
import BarraDeNavegacion from "../../componentes/BarraDeNavegacion";
import "./style.css";

const PaginaPrincipal = () => {
  return (
    <header className="header-dark">
    <BarraDeNavegacion/>
    <div className="container hero">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h1 className="text-center">SADA</h1>
                <div className="ratio ratio-16x9" >
                    <p>SADA fue diseñado con la finalidad de brindar acceso rápido a datos ambientales, como ser temperatura, humedad y precipitaciones de diferentes zonas de la provincia. A la vez que permite la visualización de registros ambientales historicos a aquellas personas que lo deseen. </p>
                </div>
            </div>
        </div>
    </div>
</header>
  );
};

export default PaginaPrincipal;
