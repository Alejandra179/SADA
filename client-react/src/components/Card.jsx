import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/api'
const url = "https://db-remaf.herokuapp.com/api/"
export default function Card() {
  const [datos,setDatos] = useState([])
 
  
  useEffect(() => {
    fetch(`${url}1`)
      .then((response) => {
        return response.json()
      })
      .then((dt) => {
        setDatos(dt)
      })
  }, [])
  
 
 return (
  <div>
    <table border="1">
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
    </table>
  </div>
);
}
