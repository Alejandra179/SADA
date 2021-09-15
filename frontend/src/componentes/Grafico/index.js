import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import './style.css'
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