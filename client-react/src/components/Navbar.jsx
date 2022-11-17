import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {
    NavLink,
 } from 'react-router-dom'
 import LoginButton from "./LoginButton";
import logoRemaf from '../assets/img/logo2.png'
import LogoutButton from "./LogoutButton";
import '../assets/js/main.js'
import '../assets/css/style.css'
const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
          
           <>
           
           <i  className ="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <header id="header">
            <div  className="d-flex flex-column" data-aos="fade-up">

                <div  className="profile">
             {   //<img  src = './logo.png' className="figure-img img-fluid rounded" />
             }
             
               <br />
                <h1  className="text-light"><NavLink to="/">REMAF</NavLink></h1>
                
                </div>

                <nav id="navbar"  className="nav-menu navbar">
                <ul>
                    <li><NavLink to="/docs" className="nav-link scrollto active"><i  className="bx bx-home"></i> <span>Docs</span></NavLink></li>
                    <li><NavLink to="/estaciones" className="nav-link scrollto active"><i  className="bx bx-home"></i> <span>Estaciones</span></NavLink></li>
                    {isAuthenticated ? <li>¡ Bienvenido{user.name}  !</li>   : <></> }
                </ul>
                </nav>
                <br />
                <div className='row'>
                <div className="align-items-center justify-content-center">
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
                <div  className="credits">
                    Designed by Alejandro Bernal
                </div>
                </div>
            </footer>
           </>
)
}
export default NavBar;
 


