import React,{useState,useEffect} from 'react'
import EditModal from '../components/EditModal'
import axios from 'axios'
//import { AppContext,useAppContext } from '../context/appContext'





function ShowTable() {
   // const {estaciones} = useAppContext(AppContext)
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [datos,setData] = useState([])
  const url = "https://api-remaf.onrender.com"


  const  apiGetEstaciones=async()=>{
   const resp = await axios.get(`${url}/api/estaciones/`)
   setData(resp.data)
    // .then(response=>{
    //    setData(response.json());
    // })
    // .catch(error=>{
    //   console.log(error);
    // })
  }

  
  useEffect( () => {
    apiGetEstaciones()
  }, [])

    return (
    <>
      <div className="d-grid gap-4 d-md-block">
      <div className='btn-group'>
          <button className="btn btn-success"  type="button">
          <i className="bi bi-plus-circle"></i> Agregar Estación 
          </button>
        </div>
        </div>
        <table className="table table-striped mt-5 bordered">
    <thead className='bg-success text-white'>
        <tr>
            <th>Estaciones</th>
            <th>Dirección</th>
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>

      {datos.map(dt => {
          return (
            <tr key={dt.id_estaciones}>
              <td>{dt.descri_estaciones}</td>
              <td>{dt.direccion_estaciones}</td>
              <td>{dt.latitude}</td>
              <td>{dt.longitude}</td>
              <td><div className='btn-group'>
                  <button onClick={handleShow} className="btn-warning"><i className='fa-regular fa-pen-to-square text-white'></i></button>
                  <button onClick={handleShow} className="btn-danger"><i className='fa-regular fa-trash-can'></i></button>
                  </div>
              </td>
            </tr>
          );
        })}
           
    
       
    </tbody>
    </table>
    <EditModal show={show} onClose={handleClose}/>
    </>
  )
}

export default ShowTable