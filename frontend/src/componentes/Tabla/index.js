import React, { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import LineChart from "../../componentes/Grafico";
import Checkbox from "../Checkbox";
import "./style.css";
const ResultadosEnLista = ({ from, to }) => { 
  console.log(from,to)
  //lista va a ser el array de los datos que se va a recibir de la base de datos
  const lista = [
    {
      id: "1",
      fecha: "22/03/2021",
      humedad_max: "74",
      temperatura_max: "21",
      temperatura_min: "2",
      velocidad_min_viento: "10",
      velocidad_max_viento: "12",
      precipitaciones: "22",
    },
    {
      id: "1",
      fecha: "21/03/2021",
      humedad_max: "74",
      temperatura_max: "21",
      temperatura_min: "2",
      velocidad_min_viento: "10",
      velocidad_max_viento: "12",
      precipitaciones: "22",
    },
    {
      id: "1",
      fecha: "20/03/2021",
      humedad_max: "74",
      temperatura_max: "21",
      temperatura_min: "2",
      velocidad_min_viento: "10",
      velocidad_max_viento: "12",
      precipitaciones: "22",
    },
    {
      id: "1",
      fecha: "19/03/2021",
      humedad_max: "74",
      temperatura_max: "21",
      temperatura_min: "2",
      velocidad_min_viento: "10",
      velocidad_max_viento: "12",
      precipitaciones: "22",
    },
    {
      id: "1",
      fecha: "18/03/2021",
      humedad_max: "74",
      temperatura_max: "21",
      temperatura_min: "2",
      velocidad_min_viento: "10",
      velocidad_max_viento: "12",
      precipitaciones: "22",
    },
    {
      id: "1",
      fecha: "17/03/2021",
      humedad_max: "74",
      temperatura_max: "21",
      temperatura_min: "2",
      velocidad_min_viento: "10",
      velocidad_max_viento: "12",
      precipitaciones: "22",
    },
    {
      id: "1",
      fecha: "16/03/2021",
      humedad_max: "74",
      temperatura_max: "21",
      temperatura_min: "2",
      velocidad_min_viento: "10",
      velocidad_max_viento: "12",
      precipitaciones: "22",
    },
    {
      id: "1",
      fecha: "15/03/2021",
      humedad_max: "74",
      temperatura_max: "21",
      temperatura_min: "2",
      velocidad_min_viento: "10",
      velocidad_max_viento: "12",
      precipitaciones: "22",
    },
  ];
  const [arrayDatasets,setArrayDatasets]= useState([])
  const arrayDatos = [
    {
      label: "Variación de humedad",
      data: lista.map((i) => i.humedad_max),
      fill: false,
      backgroundColor: "rgb(119, 221, 20)",
      borderColor: "rgb(45,87,44)",
    },
    {
      label: "Precipitaciones",
      data: lista.map((i) => i.precipitaciones),
      fill: false,
      backgroundColor: "rgb(255, 255, 255)",
      borderColor: "rgb(0,0,128)",
    },
    {
      label: "Variación de Temperatura",
      data: lista.map(
        (i) => (parseInt(i.temperatura_max) + parseInt(i.temperatura_min)) / 2
      ),
      fill: false,
      backgroundColor: "rgb(255, 0, 0)",
      borderColor: "rgb(255, 102,0)",
    },
    {
      label: "Velocidad del Viento",
      data: lista.map(
        (i) =>
          (parseInt(i.velocidad_max_viento) +
            parseInt(i.velocidad_min_viento)) /
          2
      ),
      fill: false,
      backgroundColor: "rgb(0, 0, 0)",
      borderColor: "rgb(71, 75,78)",
    },
  ];
  
  const dataList = {
    labels: lista.map((i) => i.fecha), //horas
    datasets:[arrayDatasets],
  };

  
  const pageLimit = 5;
  const [offset, setOffset] = useState(0);
  //currentData sirva para cambiar visualizacion de paginas cuando se cambia el numero
  const [currentData, setCurrentData] = useState(
    lista.slice(offset, offset + pageLimit)
  );
  //itemsPerPage sirve para que cuando se carga la pagina se muestre la primera
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    setCurrentData(lista.slice(offset, offset + pageLimit));
  }, [offset]);
  /*  useEffect(()=>{
        setRegistrosTotales(lista);
        
    },[lista]) */
  const onCheckboxClicked = (idx, isChecked, checkbox) => {
    
    if (isChecked) {
      let agregar=arrayDatos[idx]
      setArrayDatasets(agregar)
      console.log(arrayDatasets)
     
    }
    

    //Aquí puedes guardar estados si es necesario
  };
  

  return (
    <div>
      <div className="row">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <table className="table table-light table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">Fecha...</th>
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
                      <td>{item.fecha}</td>
                      <td align="center">{item.humedad_max}%</td>
                      <td align="center">{`${item.temperatura_min}-${item.temperatura_max}`}</td>
                      <td align="center">{`${item.velocidad_min_viento}-${item.velocidad_max_viento}`}</td>
                      <td align="center">{item.precipitaciones}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Paginator
                totalRecords={lista.length}
                pageLimit={pageLimit}
                pageNeighbours={1}
                setOffset={setOffset}
                currentPage={itemsPerPage}
                setCurrentPage={setItemsPerPage}
              />
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card-header">
              Representación Gráfica de los datos obtenidos
            </div>
            <div className="card-body">
              <form>
                {[
                  "Humedad",
                  "Precipitaciones",
                  "Temperatura",
                  "Velocidad del viento",
                ].map((checkbox, i) => (
                  <Checkbox
                    id={i}
                    value={checkbox}
                    onChange={onCheckboxClicked}
                   
                  />
                ))}
              </form>
            
              
            </div>
                <LineChart data={dataList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultadosEnLista;
