import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import imgMaps1 from '../assets/img/Estacion1.jpg'
import imgMaps2 from '../assets/img/Estacion2.jpg' 
import Image from 'react-bootstrap/Image'
import marketImg from '../assets/img/marker-icon.png'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import "leaflet/dist/leaflet.css"; 
import {
  NavLink,
} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
 
function MapEstaciones() { 
    const [datos,setData] = useState([])
    const url = "https://api-remaf.onrender.com" 
    const [loading,setLoading] = useState(false)
    const posticionFormosaCentral = [-24.635700, -60.293757]
    const  apiGetEstaciones=async()=>{
      setLoading(true)
     const resp = await axios.get(`${url}/api/estaciones/`)
     setLoading(false)
     setData(resp.data)
    }
    useEffect( () => {
        apiGetEstaciones()
      }, [])
  return (
    <>
 
    <MapContainer center={posticionFormosaCentral} zoom={7.45} scrollWheelZoom={false}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
 
        datos.map(dt => {
            return ( 
                <Marker  key={dt.id_estaciones} position={[dt.latitude ,dt.longitude ]}>
                        <Popup>
                        {dt.descri_estaciones} <br /> {dt.direccion_estaciones}
                               
                        <NavLink to={"/estacion/"+dt.id_estaciones} className="nav-link "><i  className="bx bx-search"></i> <span>Más Información</span></NavLink> 
                        </Popup>
                </Marker> 
    
                
            );
            })
        }
 
    </MapContainer>
   
    </>
  );
}

export default MapEstaciones;