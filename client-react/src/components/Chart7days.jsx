import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Line } from "react-chartjs-2";

import Image from 'react-bootstrap/Image'
import {
  NavLink,
} from 'react-router-dom'
 
import { Chart } from 'react-chartjs-2'
import iconImage from '../assets/img/logo_circle.png';
import iconLetras from '../assets/img/logo_letras.png';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
) 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { useState } from 'react'
import { useEffect } from 'react'
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}
import axios from 'axios' 
   

export default function ChartLine(props) {
  const [datos,setDatos] = useState([]);
 

  const formatearFecha=(f) => {
    const options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
    return (new Date(f).toLocaleTimeString('es-ES', options)).toUpperCase();
  }
  const apiGetMediciones = async () => {
    var arrayData = []
    const resp = await axios.get(`https://api-remaf.onrender.com/api/estaciones/week/stadist/${props.estacionActual}`)
   /*resp.data.map((row) => {
                return ( 
                    map((row) => {
                    }
                  arrayData.push([row.temperatura_sensores,formatearFecha(row.date_estaciones)])
                      );
                  
             
              })*/
     console.log(arrayData)
  }
  useEffect(() => {
    apiGetMediciones();
  },props.estacionActual)
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Temp. Min.",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Temp. Max.",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  return (
    <React.Fragment>
 
      <Line data={data} />
 
    </React.Fragment>
  );
}