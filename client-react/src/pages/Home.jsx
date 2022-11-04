import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/Navbar'
import ShowTable from '../components/ShowTable'
import { AppProvider } from '../context/appContext'



export default function Home() {

  return (
    <div >
      

  <i  className="bi bi-list mobile-nav-toggle d-xl-none"></i>

  <header id="header">
    <div  className="d-flex flex-column">

      <div  className="profile">
        <img  src = './logo.png' className="figure-img img-fluid rounded" />
        <h1  className="text-light"><a href="index.html">REMAF</a></h1>
      
      </div>

      <nav id="navbar"  className="nav-menu navbar">
        <ul>
          
          <li><a href="#estaciones"  className="nav-link scrollto active"><i  className="bx bx-home"></i> <span>Estaciones</span></a></li>
          <li><a href="#about"  className="nav-link scrollto"><i className="bi bi-broadcast-pin"></i><span>Sensores</span></a></li>
          <li><a href="#mediciones"  className="nav-link scrollto"><i className="bi bi-thermometer-sun"></i><span>Ultima medición</span></a></li>
          <li><a href="#resume"  className="nav-link scrollto"><i className ="bi bi-file-person"></i><span>Usuarios</span></a></li>
        </ul>
      </nav>
    </div>
  </header>

 

  <main id="mediciones">
    <section id="about"  className="about">
      <div  className="container">

        <div  className="section-title">
          <h2>Mediciones</h2>
         </div>

        <div  className="row">
          <Card />
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
    
    <section id="services"  className="services">
      <div  className="container">

        <div  className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div  className="row">
          <div  className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div  className="icon"><i  className="bi bi-briefcase"></i></div>
            <h4  className="title"><a href="">Lorem Ipsum</a></h4>
            <p  className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div  className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div  className="icon"><i  className="bi bi-card-checklist"></i></div>
            <h4  className="title"><a href="">Dolor Sitema</a></h4>
            <p  className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
          <div  className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div  className="icon"><i  className="bi bi-bar-chart"></i></div>
            <h4  className="title"><a href="">Sed ut perspiciatis</a></h4>
            <p  className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div  className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div  className="icon"><i  className="bi bi-binoculars"></i></div>
            <h4  className="title"><a href="">Magni Dolores</a></h4>
            <p  className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div  className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div  className="icon"><i  className="bi bi-brightness-high"></i></div>
            <h4  className="title"><a href="">Nemo Enim</a></h4>
            <p  className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div  className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div  className="icon"><i  className="bi bi-calendar4-week"></i></div>
            <h4  className="title"><a href="">Eiusmod Tempor</a></h4>
            <p  className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
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
