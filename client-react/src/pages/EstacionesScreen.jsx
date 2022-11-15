import React from 'react'
import  Navbar  from '../components/Navbar'
import  TableEstaciones  from '../components/TableEstaciones'
import '../assets/js/main.js'
import '../assets/css/style.css'
import CardsSensores from '../components/CardsSensores'
import Card  from '../components/Card'
export const EstacionesScreen = () =>{
   
  return (
    <>
    <Navbar />
    <main id="main">
       <TableEstaciones />
       <CardsSensores />
       <Card />
    </main>

    
    </>
  )
}
