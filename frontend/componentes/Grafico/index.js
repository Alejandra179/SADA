import React from 'react'
import './style.css'
import { Line } from '@reactchartjs/react-chart.js'



const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}


const LineChart = ({data}) => (
  
    

    <Line data={data} options={options} />
   
)

export default LineChart