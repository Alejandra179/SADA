import React,{useState,useEffect} from 'react'
import { Card,Spinner } from 'react-bootstrap';
import '../assets/js/main.js'
import axios from 'axios'
import MapEstacion from './MapEstacion.jsx';

export default function CardsSensores(props) {
  const [mediciones,setMediciones] = useState([])
  const [loading,setLoading] = useState(false)
  const url = "https://api-remaf.onrender.com"

  const  apiGetMediciones=async()=>{
    setLoading(true)
    const resp = await axios.get(`${url}/api/${props.estacionActual}`)
    setLoading(false)
   setMediciones(resp.data)
   
  }
  useEffect( () => {
    apiGetMediciones()
  }, [props.estacionActual])
  
  if(mediciones.length>0){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const urlmap= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d"+mediciones[0].latitude+"!2d"+mediciones[0].longitude+"!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621";
      return (
        <>
        
        <section id="facts" className="facts" data-aos="fade-up">
          <div className="container">
            <hr />  
            <div className="section-title text-success text-center">
              <h1> {mediciones[0].descri_estaciones} </h1>
            </div>
           <div className="card" >
             <div className="row">
              <div className="d-flex">
                <div className="col-md-8">
                <div className="section-title">
                 <h2>Ubicación</h2>
                  
                </div>
                  { loading ?   <Spinner animation="border" variant="success"  size='xl'/> :  <MapEstacion estacionActual={props.estacionActual}/> }  
                </div>
                { loading ? <Spinner animation="border" variant="success"  size='xl'/> :  
                <div className="col-md-4">
                 <ul className="list-group list-group-flush"  data-aos="fade-up">
                  
                   <div className="section-title">
                    <h2>Última medición obtenida {(new Date(mediciones[0].date_estaciones).toLocaleDateString('es-ES', options)).toUpperCase()}</h2>
                   </div>

                   
                    <li className="list-group-item"><strong>Temperatura</strong>
                  <h2 className='text-success'><i className="bi bi-thermometer-half"></i> {mediciones[0].temperatura_sensores}°</h2></li>
                    <li className="list-group-item"><strong>Humedad</strong> 
                  <h2 className='text-success'><i className="bi bi-moisture "></i> {mediciones[0].humedad_sensores} %</h2></li>
                    <li className="list-group-item"><strong>Precipitación</strong> 
                  <h2 className='text-success'> <i className="bi bi-cloud-rain-fill"></i> {mediciones[0].precipitacion_sensores} mm</h2></li>
                    <li className="list-group-item"><strong>Dirección del Viento</strong> 
                  <h2 className='text-success'><i className="bi bi-cloud-fog2"></i> {mediciones[0].direcc_viento_sensores} </h2></li>
                    <li className="list-group-item"><strong>Velocidad del Viento</strong> 
                  <h2 className='text-success'><i className="bi bi-speedometer2"></i> {mediciones[0].veloc_viento_sensores} Km/h</h2></li>
                  </ul>
                </div>
                }
              </div>
             </div>
            
          </div>

         
          </div>
         
        </section>
        </>
    );
  }else{
    return (<></>);
  }
 
}


