import React,{useState,useEffect} from 'react'
import EditModal from './EditModal'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";  

function TableEstaciones(props) {
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [datos,setData] = useState([])
  const url = "https://api-remaf.onrender.com"
  const { user, isAuthenticated } = useAuth0();

  const  apiGetEstaciones=async()=>{
   const resp = await axios.get(`${url}/api/estaciones/`)
   setData(resp.data)
  }
  useEffect( () => {
    apiGetEstaciones()
  }, [])

    return (
    <>
    <section id="estaciones"  className="resume">
      <div  className="container">

        <div  className="section-title">
          <h2>Estaciones</h2>
           </div>
      
        <div  className="row">
          <div  className="col-lg-12" data-aos="fade-up">
             
         {
           isAuthenticated ? 
                    <div className="d-grid gap-4 d-md-block">
                      <div className='btn-group'>
                        <button className="btn btn-success" type="button">
                          <i className="bi bi-plus-circle"></i> Agregar Estación
                        </button>
                      </div>
                    </div>
           : <></>
         }
        
        
        <div className='table-responsive-md'>
        <table className="table table-responsive table-striped mt-5 bordered">
    <thead className='bg-success text-white'>
        <tr>
            <th>Acciones</th>
            <th></th>
            <th>Estaciones</th>
            <th>Dirección</th>
            <th>Latitud</th>
            <th>Longitud</th>
            
        </tr>
    </thead>
    
    <tbody>

      {datos.map(dt => {
          return (
            <tr key={dt.id_estaciones}>
              {
          isAuthenticated ? 
              <td><div className='btn-group'>
                  <button onClick={handleShow} className="btn-warning"><i className='fa-regular fa-pen-to-square text-white'></i></button>
                  <button onClick={handleShow} className="btn-danger"><i className='fa-regular fa-trash-can'></i></button>
                  </div>
              </td>
              : <></>
            }
              <td><button className='btn-success text-white' onClick={()=>props.setEstacionActual(dt.id_estaciones)}>Ver mediciones</button></td>
              <td>{dt.descri_estaciones}</td>
              <td>{dt.direccion_estaciones}</td>
              <td>{dt.latitude}</td>
              <td>{dt.longitude}</td>
             
            </tr>
          );
        })}
           
    
       
    </tbody>
    </table>
    </div>
    <EditModal show={show} onClose={handleClose}/>
          </div>
       
        </div>

      </div>
    </section>
    
    </>
  )
}

export default TableEstaciones