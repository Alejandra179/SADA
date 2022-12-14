import React,{useState} from 'react'
import  Navbar  from '../components/Navbar'
import  TableEstaciones  from '../components/TableEstaciones'
import '../assets/js/main.js'
import '../assets/css/style.css'
import CardsSensores from '../components/CardsSensores'
import ScriptMain from '../components/ScriptMain'
import TableMediciones  from '../components/TableMediciones'
import Chart7days from '../components/Chart7days'
import {
 useParams
} from 'react-router-dom'; 

export const EstacionScreen = () =>{
  const [estacionActual,  setEstacionActual] = useState(1);
  let {id} = useParams();
  if (id != ""){
    setEstacionActual(id)
  }
 
  return (
    <>
    <Navbar />
    <main id="main">
       <TableEstaciones  setEstacionActual={ setEstacionActual} />
  
       <CardsSensores estacionActual={estacionActual}/>
       
       <TableMediciones estacionActual={estacionActual}/>
       <ScriptMain />
    </main>

    
    </>
  )
}
