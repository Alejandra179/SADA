import React from 'react'
import { useState } from 'react'

function Create() {
  const [estacion,setEstacion] = useState('');
  const [direccion,setDireccion] = useState('');
  
  const handleSubmit  = (e) => {
    console.log(estacion)
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 mt-2 ">
        <input 
            value={estacion}
            onChange={(e)=>setEstacion(e.target.value)}
            className="form-control"
            placeholder="Estación"/>
        <label >Estación</label>
        </div>
        <div className="form-floating">
        <input 
         value={direccion}
         onChange={(e)=>setDireccion(e.target.value)}
         className="form-control" 
         placeholder="Dirección" />
        <label >Dirección</label>
        </div>
        <div className="d-grid mt-3 ">
          <button className="btn btn-success" type="button">
            <i className='fa-solid fa-circle-plus fa-2x'></i>
          </button>
        </div>
    </form>
  )
}

export default Create