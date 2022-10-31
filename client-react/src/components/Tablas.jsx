
import api from '../services/api'
import React from 'react'

const columns= [
    { title: 'Temperatura', field: 'temperatura_sensores' },
    { title: 'Humedad', field: 'humedad_sensores' },
    { title: 'Precipitación', field: 'precipitacion_sensores' },
    { title: 'Dirección del viento', field: 'direcc_viento_sensores'},
    { title: 'Velocidad del viento', field: 'veloc_viento_sensores'}
  ];


function BasicExample() {
    return(
      <div>
      </div>
    );
}
export default BasicExample;