import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function MapEstacion() {
    const position = [	-26.0814025635489, -58.27586964876695]
  return (
    <>
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='Ale'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
   </MapContainer>
    </>
  );
}

export default MapEstacion;

