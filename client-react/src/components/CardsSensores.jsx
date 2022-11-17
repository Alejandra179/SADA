import React,{useState,useEffect} from 'react'
import { Card } from 'react-bootstrap';
import '../assets/js/main.js'
import axios from 'axios'


export default function CardsSensores(props) {
  const [mediciones,setMediciones] = useState([])
  const url = "https://api-remaf.onrender.com"

  const  apiGetMediciones=async()=>{
  const resp = await axios.get(`${url}/api/${props.estacionActual}`)
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
            <div className="section-title">
              <h2>Última medición obtenida {(new Date(mediciones[0].date_estaciones).toLocaleDateString('es-ES', options)).toUpperCase()}</h2>
            </div>
    
            <div className="row no-gutters">
            
              <div className="col-lg-4 col-md-3 align-items-md-center" data-aos="fade-up">
                <Card>
                <div className="count-box  col-lg-12  col-lg-12">
                  <Card.Title>Temperatura</Card.Title>
                  <i className="bi bi-thermometer-half"></i>
                  <h1>{mediciones[0].temperatura_sensores}°</h1>
                </div>
                </Card>
              </div>
    
              <div className="col-lg-4 col-md-3   align-items-md-center" data-aos="fade-up" data-aos-delay="100">
              <Card>
                <div className="count-box  col-lg-12">
                  <Card.Title>Humedad</Card.Title>
                  <i className="bi bi-moisture"></i>
                  <h1>{mediciones[0].humedad_sensores} %</h1>
                  
                  
                </div>
                </Card>
              </div>
    
              <div className="col-lg-4 col-md-3   align-items-md-center" data-aos="fade-up" data-aos-delay="200">
              <Card>
                <div className="count-box  col-lg-12">
                  
                  <Card.Title>Precipitación</Card.Title>
                  <i className="bi bi-cloud-rain-fill"></i>
                  <h1>{mediciones[0].precipitacion_sensores} mm</h1>
                  
                </div>
                </Card>
              </div>
    
              <div className="col-lg-4 col-md-3   align-items-md-center" data-aos="fade-up" data-aos-delay="300">
              <Card>
                <div className="count-box  col-lg-12">
             
                  <Card.Title>Dirección del Viento</Card.Title>
                  <i className="bi bi-cloud-fog2"></i>
                  <h1>{mediciones[0].direcc_viento_sensores} </h1>
                  
                </div>
                </Card>
              </div>
    
              <div className="col-lg-4 col-md-3   align-items-md-center" data-aos="fade-up" data-aos-delay="300">
              <Card>
                <div className="count-box  col-lg-12">
                  <Card.Title>Velocidad del Viento</Card.Title>
                  <i className="bi bi-speedometer2"></i>
                  <h1>{mediciones[0].veloc_viento_sensores} Km/h</h1>
                </div>
                </Card>
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


