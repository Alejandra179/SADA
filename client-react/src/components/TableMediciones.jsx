import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function TableMediciones(props) {
  const [datos,setDatos] = useState([])
  const url = "https://api-remaf.onrender.com"

  
  let fecha = new Date()
  let day = fecha.getDate()
  let month = fecha.getMonth() + 1
  let year = fecha.getFullYear()

  if(month < 10){
     fecha =`-0${month}-${day}`;
  }else{
    fecha =`${year}-${month}-${day}`;
  }
  const [date, setDate] = useState(fecha);
   
  
  const apiGetMediciones = async () => {
    const resp = await axios.get(`${url}/api/${props.estacionActual}`)
    setDatos(resp.data)
  }
  useEffect(() => {
    apiGetMediciones();
    setDate(fecha)
  }, [])

 

 return (
<section id="estaciones"  className="resume">
      <div  className="container">

        <div  className="section-title">
          <h2>Mediciones</h2>
        </div>

        <div className="row ">
           <div className="col-md-3 text-inline">
            <Form.Group controlId="duedate">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  name="duedate"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Button variant="success">Buscar</Button>
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
              </tr>
            </thead>
            <tbody>
              {datos.map(dt => {
                return (
                  <tr key={dt.id_sensores}>
                    <td>{dt.temperatura}</td>
                    <td>{dt.humedad}</td>
                    <td>{dt.precipitacion}</td>
                    <td>{dt.direcc_viento}</td>
                    <td>{dt.veloc_viento}</td>
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
