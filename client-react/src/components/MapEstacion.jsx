import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import imgMaps1 from '../assets/img/Estacion1.jpg'
import imgMaps2 from '../assets/img/Estacion2.jpg' 
import Image from 'react-bootstrap/Image'
import { useEffect } from 'react'
import { useState } from 'react'
import "leaflet/dist/leaflet.css"; 
function MapEstacion(props) {
    const position = [	-26.0814025635489, -58.27586964876695]
  
    
  return (
    <>
   <MapContainer center={position} zoom={300} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
     Prueba <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </>
  );
}

export default MapEstacion;

