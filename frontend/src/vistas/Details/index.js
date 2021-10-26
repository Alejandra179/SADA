import React, { useRef, useEffect, useState } from "react";
import LineChart from "../../componentes/Grafico";
import { useReactToPrint } from "react-to-print";
import {
  faTemperatureLow,
  faTint,
  faWind,
  faTachometerAlt,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mapa from "../../public/img/mapa.PNG";
import "./style.css";
import Calendario from "../../componentes/Calendario/Calendario";
import getEndRegistros from "../../services/getEndRegistro";
import BarraDeNavegacion from "../../componentes/BarraDeNavegacion";

const Details = () => {
  const [datos, setDatos] = useState([]);
  const [data, setData] = useState();
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await getEndRegistros();
      setDatos(response);
    };
    fetchData();
  }, []);
  useEffect(()=>{
    setData({
      labels: datos.map((i) => i.hora), //horas
      datasets: [
        {
          label: "Variación de temperatura",
          data: datos.map((i) => i.temperatura),
          fill: false,
          backgroundColor: "rgb(255, 255, 0)",
          borderColor: "rgb(255, 102,0)",
        },
      ],
    })

  },[datos]) 
  const graficoRef = useRef();
  const printGrafico = useReactToPrint({
    content: () => graficoRef.current,
  });
  const parametrosMeterologicos = ()=>{
    return(  <div className="col-4">
    <div className="card-section border rounded">
      <div className="card-header rounded">Condiciones de la hora 10:00</div>
      <div className="card-body">
        <div
          className="d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <dl className="card-text">
            <FontAwesomeIcon
              icon={faTemperatureLow}
              className="icono"
            />
            Temperatura:
          </dl>
          <dl className="card-text">40°</dl>
        </div>
        <div>''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>
        <div className="card-text">
          <FontAwesomeIcon icon={faTint} className="icono" />
          <strong>Precipitación</strong>
        </div>
        <div
          className="container d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="card-text">Última Hora:</div>
          <div className="card-text">0mm</div>
        </div>
        <div
          className="container d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="card-text">Últimas 24 hs:</div>
          <div className="card-text">0mm</div>
        </div>

        <div
          className="container d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="card-text">Últimos 30 días:</div>
          <div className="card-text">0mm</div>
        </div>

        <div
          className="container d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="card-text">Total del año a la fecha:</div>
          <div className="card-text">0mm</div>
        </div>
        <div>''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>

        <div
          className="d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="card-text">
            <FontAwesomeIcon icon={faTachometerAlt} className="icono" />
            Humedad:
          </div>
          <div className="card-text">50%</div>
        </div>
        <div>'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>
        <div className="card-text">
          <FontAwesomeIcon icon={faWind} className="icono" />
          <strong>Viento</strong>
        </div>
        <div
          className="container d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="card-text">Dirección:</div>
          <div className="card-text">Norte</div>
        </div>
        <div
          className="container d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="card-text">Intensidad:</div>
          <div className="card-text">17.7 km/h</div>
        </div>
      </div>
    </div>
  </div>)
  }

  return (
    <div className="detail">
      <BarraDeNavegacion/>
      <div className="container" id="body">
        <div className="row">
        {(datos.length!==0)?parametrosMeterologicos():''}
          <div className="col-4">
            <div className="card-section">
              <div className="card-header">Ubicación</div>
              <div className="card-body">
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="card-text">Latitud:</div>
                  <div className="card-text">33º 20' 9,7440'' Sur</div>
                </div>
                <div>'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>

                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="card-text">Longitud:</div>
                  <div className="card-text">66º 26' 7,0440'' Oeste</div>
                </div>
                <div>'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="card-text">Altura:</div>
                  <div className="card-text"> 602 mts</div>
                </div>
                <div>'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</div>
                <div>
                  <div className="card-text">Mapa</div>
                  <div className="card-text container">
                    <br />
                    <div className="d-flex justify-content-center">
                      <img src={mapa} alt="mapa" style={{ width: "120%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4" ref={graficoRef}>
            
            <div className="card-section">
              <div className="card-header">
                Gráfico de temperatura las últimas 24 horas
              </div>
              <div className="card-body">
                {data!=="" ? <LineChart data={data} />:""}
                <button onClick={printGrafico}>
                  <FontAwesomeIcon icon={faPrint} />
                </button>
              </div>
            </div>

           
            
          </div>
        </div>
        <br />
        <div className="row d-flex">
          <div className="col-12">
            <Calendario />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
