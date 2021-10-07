import React, { useRef } from "react";
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

const Details = () => {
  const graficoRef = useRef();
  const printGrafico = useReactToPrint({
    content: () => graficoRef.current,
  });
  const data = {
    labels: [10.0, 9.0, 2.0, 12, 21, 13], //horas
    datasets: [
      {
        label: "Variación de temperatura",
        data: ["30", "25", "35"],
        fill: false,
        backgroundColor: "rgb(255, 255, 0)",
        borderColor: "rgb(255, 102,0)",
      },
    ],
  };

  return (
    <div className="detail">
      
      <div className="container" id="body">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header">Condiciones de la hora 10:00</div>
              <div className="card-body">
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="card-text">
                    <FontAwesomeIcon
                      icon={faTemperatureLow}
                      className="icono"
                    />
                    Temperatura:
                  </div>
                  <div className="card-text">40°</div>
                </div>
                <div>--------------------------------------------------</div>
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
                  <div className="card-text">Últimas 30 días:</div>
                  <div className="card-text">0mm</div>
                </div>
                
                <div
                  className="container d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="card-text">Total del año a la fecha:</div>
                  <div className="card-text">0mm</div>
                </div>
                <div>--------------------------------------------------</div>
               
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
                <div>--------------------------------------------------</div>
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
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-header">Ubicación</div>
              <div className="card-body">
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="card-text">Latitud:</div>
                  <div className="card-text">33º 20' 9,7440'' Sur</div>
                </div>
                <div>--------------------------------------------------</div>

                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="card-text">Longitud:</div>
                  <div className="card-text">66º 26' 7,0440'' Oeste</div>
                </div>
                <div>--------------------------------------------------</div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="card-text">Altura:</div>
                  <div className="card-text"> 602 mts</div>
                </div>
                <div>--------------------------------------------------</div>
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
            <div className="card">
              <div className="card-header">
                Gráfico de temperatura las últimas 24 horas
              </div>
              <div className="card-body">
                <LineChart data={data} />
                <button onClick={printGrafico}>
                  <FontAwesomeIcon icon={faPrint} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <Calendario />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
