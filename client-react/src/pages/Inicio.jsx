import React  from 'react' 
import '../assets/js/main.js'
import '../assets/css/style.css' 
import MapEstaciones from '../components/MapEstaciones' 
 
import Prueba from '../components/Prueba' 
import { Line } from "react-chartjs-2";
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
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


export const Inicio = () =>{ 
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  return (
    <>
         
    <main id="main"> 
    <section id="estaciones"  className="resume">
      <div  className="container">    
      
          
        <div  className="section-title">
          <h2>Estaciones</h2>
           </div>
      
        <div  className="row">
          <div  className="col-lg-12" data-aos="fade-up">
           <MapEstaciones />
          </div>
        </div>
        <Prueba />

        <Line data={data} />
       </div>
       
      
    </section>      
    </main>

    
    </>
  )
}