import React from 'react'
import Card from '../components/Card'
import DocApi from '../components/DocAPI'
import NavBar from '../components/NavBar'
import ShowTable from '../components/TableEstaciones'
import '../assets/js/main.js'
import '../assets/css/style.css'

export const Home = () =>{

  return (
    <div >
     <NavBar />

 

  <main id="main">
    <section id="about"  className="about">
      <div  className="container">

        <div  className="section-title">
          <h2>Mediciones</h2>
         </div>

        <div  className="row">
          <Card />
          <DocApi />
        </div>

      </div>
    </section>
   
    <section id="estaciones"  className="resume">
      <div  className="container">

        <div  className="section-title">
          <h2>Estaciones</h2>
           </div>

        <div  className="row">
          <div  className="col-lg-12" data-aos="fade-up">
           <ShowTable />
          </div>
       
        </div>

      </div>
    </section>
    
  

  </main>

  
  
    </div>
  )
}
