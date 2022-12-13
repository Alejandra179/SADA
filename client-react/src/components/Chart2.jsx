import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { useState } from 'react'
import { useEffect } from 'react'
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}
import axios from 'axios' 
const data = [

[ '00:00', 0] ,
  ['03:00', 300],
  ['06:00', 600],
  ['09:00', 800],
  ['12:00', 1500],
  ['15:00', 2000],
  ['18:00', 2400],
  ['21:00', 2400],
  ['24:00', 100],
];

export default function Chart() {
  const theme = useTheme();
  const [data,setData] = useState([]);
 

  const formatearFecha=(f) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (new Date(f).toLocaleTimeString('es-ES', options)).toUpperCase();
  }
  const apiGetMediciones = async () => {
    var arrayData = []
    const resp = await axios.get(`https://api-remaf.onrender.com/api/1/2022-10-01/2022-12-01`)
    resp.data.map((row) => {
                return (
                  arrayData.push([row.temperatura_sensores,formatearFecha(row.date_estaciones)])
                      );
                  
             
              })
    setData([arrayData]) 
  }
  useEffect(() => {
    apiGetMediciones();
  },[1])
  
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}