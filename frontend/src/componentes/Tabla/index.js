import React, { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { convertFormatDMY, generarArray } from "../../helpers";
import LineChart from "../../componentes/Grafico";
import "./style.css";
const ResultadosEnLista = ({ registrosList }) => {
  const [registrosTotales, setRegistrosTotales] = useState([]);
  //registros totales va a contener los datos para ser mostrados mediante
  //el tratamiento de registrosList.
  //arrayDatos almacena los datos necesarios para iterar sobre los difentes tipos de datos
  //a mostrar en el grafico
  let arrayDatos = [
    {
      label: "Variación de humedad",
      data: registrosTotales.map((i) => i.humedad),
      fill: false,
      backgroundColor: "rgb(119, 221, 20)",
      borderColor: "rgb(45,87,44)",
    },
    {
      label: "Precipitaciones",
      data: registrosTotales.map((i) => i.precipitacion),
      fill: false,
      backgroundColor: "rgb(255, 255, 255)",
      borderColor: "rgb(0,0,128)",
    },
    {
      label: "Variación de Temperatura",
      data: registrosTotales.map(
        (i) => (parseInt(i.temperatura_max) + parseInt(i.temperatura_min)) / 2
      ),
      fill: false,
      backgroundColor: "rgb(255, 0, 0)",
      borderColor: "rgb(255, 102,0)",
    },
    {
      label: "Velocidad del Viento",
      data: registrosTotales.map(
        (i) => (parseInt(i.velocidad_max) + parseInt(i.velocidad_min)) / 2
      ),
      fill: false,
      backgroundColor: "rgb(0, 0, 0)",
      borderColor: "rgb(71, 75,78)",
    },
  ];
  //pageLimit indica la cantidad de registros maximos a mostrar en cada pagina.
  const pageLimit = 5;
  //offset inicia el numero de pagina en el que iniciara
  const [offset, setOffset] = useState(0);
  //currentData sirva para cambiar visualizacion de paginas cuando se cambia el numero
  const [currentData, setCurrentData] = useState([]);
  //itemsPerPage sirve para que cuando se carga la pagina se muestre la primera
  const [itemsPerPage, setItemsPerPage] = useState(1);
  //arrayDatasets va a contener los datos a mostrar en el grafico
  const [arrayDatasets, setArrayDatasets] = useState([]);
  //una vez que se reciben los de registrosList se llama a la funcion generarArray
  //y se setea el valor de registrosTotales
  useEffect(() => {
    setRegistrosTotales(generarArray(registrosList));
  }, [registrosList]);
  //cuando se cargan los registrosTotales se genera el paginado mediante el setCurrentData
  useEffect(() => {
    setCurrentData(registrosTotales.slice(offset, offset + pageLimit));
  }, [offset, registrosTotales]);

  const paginacion = () => {
    return (
      <Paginator
        totalRecords={registrosTotales.length}
        pageLimit={pageLimit}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={itemsPerPage}
        setCurrentPage={setItemsPerPage}
      />
    );
  };
  const mostrarGrafico = () => {
    return (
      <div className="col-5">
        <div className="card">
          <div className="card-header">
            Representación Gráfica de los datos obtenidos
          </div>
          <div className="card-body">
            <form>
              <label>
                <input
                  name="datos"
                  type="radio"
                  value="0"
                  onChange={changeValue}
                />
                Humedad
              </label>
              <br />
              <label>
                <input
                  name="datos"
                  type="radio"
                  value="1"
                  onChange={changeValue}
                />
                Precipitaciones
              </label>
              <br />
              <label>
                <input
                  name="datos"
                  type="radio"
                  value="2"
                  onChange={changeValue}
                />
                Temperatura
              </label>
              <br />
              <label>
                <input
                  name="datos"
                  type="radio"
                  value="3"
                  onChange={changeValue}
                />
                Velocidad del Viento
              </label>
              <br />
            </form>
          </div>
          <LineChart data={dataList} />
        </div>
      </div>
    );
  };
  const changeValue = (event) =>
    setArrayDatasets(arrayDatos[event.target.value]);

  const mostarTabla = () => {
    return (
      <div className="row">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <table className="table table-light table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col" align="center">
                      Humedad Max.
                    </th>
                    <th scope="col">Temperatura</th>
                    <th scope="col" align="center">
                      Velocidad del Viento
                    </th>
                    <th scope="col">Precipitaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td align="center">Min-Max</td>
                    <td align="center">Min-Max</td>
                    <td align="center"></td>
                  </tr>
                  {currentData.map((item) => (
                    <tr key={item._id}>
                      <td>{convertFormatDMY(item.fecha)}</td>
                      <td align="center">{item.humedad}%</td>
                      <td align="center">{`${item.temperatura_min}-${item.temperatura_max}°`}</td>
                      <td align="center">{`${item.velocidad_min}-${item.velocidad_max}°`}</td>
                      <td align="center">{`${item.precipitacion}mm`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {paginacion()}
            </div>
          </div>
        </div>
        {mostrarGrafico()}
      </div>
    );
  };

  const dataList = {
    labels: registrosTotales.map((i) => convertFormatDMY(i.fecha)), //horas
    datasets: [arrayDatasets],
  };

  return (
    <div>
      {registrosTotales ? (
        mostarTabla()
      ) : (
        <div className="row">
          <div className="col-7">
            <div className="card">
              <div className="card-body">
                No se encontraron registros de la fecha seleccionada
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ResultadosEnLista;
