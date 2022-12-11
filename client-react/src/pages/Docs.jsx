import React from 'react'
import  Navbar  from '../components/Navbar'
import  DocApi  from '../components/DocApi'
import '../assets/js/main.js'
import '../assets/css/style.css'
export const Docs = () =>{
   
  return (
    <>
    <Navbar />
    <main id="main">
      
    <DocApi />
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
    
    
    </>
  )
}
