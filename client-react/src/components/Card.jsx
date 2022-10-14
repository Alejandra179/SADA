import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/api'
import Table from 'react-bootstrap/Table';


export default function Card() {
  const [datos,setDatos] = useState([])

  const getData = async () => {
    await api(1)
    .then((dt) => {
      setDatos(dt)
    })
  }
  
  useEffect( () => {
    getData()
  }, [])
  
 
 return (
  <div className='bg-light'>
   <Table striped bordered hover >
      <thead>
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
              <td>{dt.temperatura_sensores}</td>
              <td>{dt.humedad_sensores}</td>
              <td>{dt.precipitacion_sensores}</td>
              <td>{dt.direcc_viento_sensores}</td>
              <td>{dt.veloc_viento_sensores}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </div>
);
}
