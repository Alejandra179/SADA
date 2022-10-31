import React from 'react'
import { AppContext,useAppContext } from '../context/appContext'

function ShowTable() {
    const {estaciones} = useAppContext(AppContext)
    console.log(estaciones)
  return (
    <>
        <table className="table table-striped mt-5">
    <thead className='bg-dark text-white'>
        <tr>
            <th>Estaciones</th>
            <th>Dirección</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
       {  
         estaciones.map((estacion) => (
            <tr  key={estacion.id}>
                <td>Larry the Bird</td>
                <td>asd</td>
                <td><div className='btn-group'>
                    <button className="btn-warning"><i className='fa-regular fa-pen-to-square text-white'></i></button>
                    <button className="btn-danger"><i className='fa-regular fa-trash-can'></i></button>
                    </div>
                </td>
            </tr>
        ))
        
       }
       
    </tbody>
    </table>
    </>
  )
}

export default ShowTable