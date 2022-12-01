import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function TableMediciones(props) {
  const [datos,setDatos] = useState([])
  const [descriEstacion,setDescriEstacion] = useState('')
  const url = "https://api-remaf.onrender.com"
  let fecha = new Date()
  let day = fecha.getDate()
  let month = fecha.getMonth() + 1
  let year = fecha.getFullYear()
  if(day<10){
    day=`0${day}`
  }
  if(month < 10){
     fecha =`-0${month}-${day}`;
  }else{
    fecha =`${year}-${month}-${day}`;
  }
  const [FDesde, setFDesde] = useState(fecha);
  const [FHasta, setFHasta] = useState(fecha);
  
  const apiGetMediciones = async () => {
    const resp = await axios.get(`${url}/api/${props.estacionActual}/${FDesde}/${FHasta}`)
    setDatos(resp.data)
    setDescriEstacion(resp.data[0].descri_estaciones);
  }
  useEffect(() => {
    apiGetMediciones();
    setFDesde(FDesde)
    setFHasta(FHasta)
  },[props.estacionActual])
  
  const formatearFecha=(f) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (new Date(f).toLocaleDateString('es-ES', options)).toUpperCase();
  }
 

 return (
<section id="estaciones"  className="resume">
      <div  className="container">

        <div  className="section-title">
          <h2>Mediciones de {descriEstacion} </h2>
        </div>

        <div className="row ">
           <div className="col-md-3 text-inline">
            
            <Form.Group controlId="duedate">
                <Form.Label >Fecha Desde</Form.Label>
                <Form.Control 
                  type="date"
                  name="duedate"
                  value={FDesde}
                  onChange={(e) => setFDesde(e.target.value)}
                />
                <Form.Label  >Fecha Hasta </Form.Label>
                <Form.Control 
                  type="date"
                  name="duedate"
                  value={FHasta}
                  onChange={(e) => setFHasta(e.target.value)}
                />
                <br />  
              <Button variant="success" onClick={()=>apiGetMediciones()}>Buscar</Button>
            </Form.Group>
           </div>
          
        </div>
        <br />
        
        <div className='table-responsive-md'>

        
        
        
        <table className="table table-responsive table-striped mt-5 bordered">
            <thead className='bg-success text-white'>
              <tr>
                <th>Temperatura</th>
                <th>Humedad</th>
                <th>Precipitacion</th>
                <th>Dirección del viento</th>
                <th>Velocidad del viento</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {datos.map(dt => {
                return (
                  <tr key={dt.id_sensores}>
                    <td>{dt.temperatura_sensores}</td>
                    <td>{dt.humedad_sensores}</td>
                    <td>{dt.precipitacion_sensores}</td>
                    <td>{dt.direcc_viento_sensores}</td>
                    <td>{dt.veloc_viento_sensores}</td>
                    <td>{formatearFecha(dt.date_estaciones)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table> 
      </div>
    </div>
       
    </section>
  
);
}
