import React  from 'react' 
import '../assets/js/main.js'
import '../assets/css/style.css' 
import MapEstaciones from '../components/MapEstaciones' 
 
import DefaultNavbar from "../components/DefaultNavbar";
import Prueba from '../components/Prueba' 


export const Inicio = () =>{ 
  return (
    <>
         <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
    <main id="main"> 
    <section id="estaciones"  className="resume">
      <div  className="container">    
      
          
        <div  className="section-title">
          <h2>Estaciones</h2>
           </div>
      
        <div  className="row">
          <div  className="col-lg-12" data-aos="fade-up">
           <MapEstaciones />
          </div>
        </div>
        <Prueba />
       </div>

      
    </section>      
    </main>

    
    </>
  )
}