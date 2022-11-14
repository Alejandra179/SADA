import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {
    NavLink,
 } from 'react-router-dom'
 import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

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
             {isAuthenticated ? <img  src={user.picture} alt={user.name}  /> : <></> }
               <br />
                <h1  className="text-light"><NavLink to="/">REMAF</NavLink></h1>
                
                </div>

                <nav id="navbar"  className="nav-menu navbar">
                <ul>
                    <li><NavLink to="/docs" className="nav-link scrollto active"><i  className="bx bx-home"></i> <span>Docs</span></NavLink></li>
                    <li><NavLink to="/" className="nav-link scrollto active"><i  className="bx bx-home"></i> <span>Estaciones</span></NavLink></li>
                    <li><NavLink  to="/"  className="nav-link scrollto"><i className="bi bi-broadcast-pin"></i><span>Sensores</span></NavLink></li>
                    <li><NavLink to="/" className="nav-link scrollto"><i className="bi bi-thermometer-sun"></i><span>Ultima medición</span></NavLink></li>
                    <li><NavLink to="/"  className="nav-link scrollto"><i className ="bi bi-file-person"></i><span>Usuarios</span></NavLink></li>
                    <li>  {isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
                
                </ul>
                </nav>
            </div>
            </header>
           </>
)
}
export default NavBar;
 


