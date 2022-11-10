import React from 'react'
import Card from '../components/Card'
import DocApi from '../components/DocAPI'
import NavBar from '../components/NavBar'
import ShowTable from '../components/ShowTable'
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

  <footer id="footer">
    <div  className="container">
      <div  className="copyright">
        &copy; Copyright <strong><span>REMAF</span></strong>
      </div>
      <div  className="credits">
        Designed by Alejandro Bernal
      </div>
    </div>
  </footer>
  <a href="#"  className="back-to-top d-flex align-items-center justify-content-center"><i  className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}
