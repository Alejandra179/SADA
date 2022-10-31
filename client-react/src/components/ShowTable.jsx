import React,{useState} from 'react'
import EditModal from '../components/EditModal'
//import { AppContext,useAppContext } from '../context/appContext'

const  apiGetEstaciones=async()=>{
    await axios.get(`${url}/api/estaciones`)
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

function ShowTable() {
   // const {estaciones} = useAppContext(AppContext)
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
           <tr>
     
                <td>Larry the Bird</td>
                <td>asd</td>
                <td><div className='btn-group'>
                    <button onClick={handleShow} className="btn-warning"><i className='fa-regular fa-pen-to-square text-white'></i></button>
                    <button onClick={handleShow} className="btn-danger"><i className='fa-regular fa-trash-can'></i></button>
                    </div>
                </td>
            </tr>
    
       
    </tbody>
    </table>
    <EditModal show={show} onClose={handleClose}/>
    </>
  )
}

export default ShowTable