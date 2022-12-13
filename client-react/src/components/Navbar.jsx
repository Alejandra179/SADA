import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {
    NavLink,
 } from 'react-router-dom'
 import LoginModal from "./LoginModal";
import logoRemaf from '../assets/img/logo2.png'
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import '../assets/js/main.js'
import '../assets/css/style.css'
import Image from 'react-bootstrap/Image'
const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log(isAuthenticated)
    return (
          
           <>
           
           <i  className ="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <header id="header">
            <div  className="d-flex flex-column" data-aos="fade-up">

                <div  className="profile">
                 <Image  src = {logoRemaf}   />
              
             
               <br />
                <h1  className="text-light"><NavLink to="/">REMAF</NavLink></h1>
                
                </div>

                <nav id="navbar"  className="nav-menu navbar">
                <ul>
                <li><NavLink to="/inicio" className="nav-link scrollto active"><i  className="bx bx-home"></i> <span>Inicio</span></NavLink></li>
                    <li><NavLink to="/docs" className="nav-link scrollto active"><i class="bi bi-file-earmark"></i><span>Docs</span></NavLink></li>
                    <li><NavLink to="/estaciones" className="nav-link scrollto active"><i class="bi bi-broadcast-pin"></i><span>Estaciones</span></NavLink></li>
                    {isAuthenticated ? <li>¡ Bienvenido  {user.name}  !</li>   : <></> }
                </ul>
                </nav>
                <br />
                <div className='row d-flex '>
                <div className=" d-flex align-items-center justify-content-center">
                 {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </div>  
                </div>
                
            </div>
            </header>
           
            <footer id="footer">
              
                <div  className="container">
                <div  className="copyright">
                    &copy; Copyright <strong><span>REMAF</span></strong>
                </div>
                   
                </div>
            </footer>
           </>
)
}
export default NavBar;
 


