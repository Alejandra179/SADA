import React,{useState} from 'react'
import  Navbar  from '../components/Navbar'
import  TableEstaciones  from '../components/TableEstaciones'
import '../assets/js/main.js'
import '../assets/css/style.css'
import CardsSensores from '../components/CardsSensores'
import ScriptMain from '../components/ScriptMain'
import TableMediciones  from '../components/TableMediciones'
import  Chart7days from '../components/Chart7days'
import MapEstaciones from '../components/MapEstaciones'
export const EstacionesScreen = () =>{
  const [estacionActual,  setEstacionActual] = useState(1);
  
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
