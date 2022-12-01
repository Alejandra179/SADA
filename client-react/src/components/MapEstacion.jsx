import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import imgMaps1 from '../assets/img/Estacion1.jpg'
import imgMaps2 from '../assets/img/Estacion2.jpg' 
import Image from 'react-bootstrap/Image'
import { useEffect } from 'react'
import { useState } from 'react'
function MapEstacion(props) {
    const position = [	-26.0814025635489, -58.27586964876695]
    const [estacionActual,setEstacionActual] = useState(props.estacionActual)
    useEffect( () => {
      setEstacionActual(props.estacionActual)
    }, [props.estacionActual])
    
  return (
    <>
   <section id="facts" className="facts" data-aos="fade-up">
          <div className="container">
          {
             estacionActual==1 ? <Image  src = {imgMaps1}   /> :<Image  src = {imgMaps2}   /> 
             
          }
          </div>
    </section>
    </>
  );
}

export default MapEstacion;

