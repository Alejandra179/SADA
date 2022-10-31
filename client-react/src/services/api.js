
import axios from 'axios'
const url = "https://api-remaf.onrender.com"
//https://api-remaf.onrender.com/api/estaciones
export default async function api(id) {
  return await fetch(`${url}${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Response is not ok");
      return res.json();
    })
    .then((response) => {
       return response
    })
  
}



const  apiGetEstaciones=async()=>{
  await axios.get(`${url}/api/estaciones`)
  .then(response=>{
   setData(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const peticionPost=async()=>{
  await axios.post(url, artistaSeleccionado)
  .then(response=>{
    setData(data.concat(response.data));
    abrirCerrarModalInsertar();
  }).catch(error=>{
    console.log(error);
  })
}

const peticionPut=async()=>{
  await axios.put(url+"/"+artistaSeleccionado.id, artistaSeleccionado)
  .then(response=>{
    var dataNueva= data;
    dataNueva.map(artista=>{
      if(artista.id===artistaSeleccionado.id){
        artista.artista=artistaSeleccionado.artista;
        artista.genero=artistaSeleccionado.genero;
        artista.ventas=artistaSeleccionado.ventas;
        artista.pais=artistaSeleccionado.pais;
      }
    });
    setData(dataNueva);
    abrirCerrarModalEditar();
  }).catch(error=>{
    console.log(error);
  })
}

