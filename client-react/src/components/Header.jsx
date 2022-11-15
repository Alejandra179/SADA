import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo2.png'
import Nav from 'react-bootstrap/Navbar';
import {
    NavLink,
 } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
function BrandExample() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <Navbar  collapseOnSelect expand="lg"  bg="success" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           REMAF
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav  className="me-auto text-white my-2 my-lg-0 d-flex"
                style={{ maxHeight: '100px' }}
                
                 >
                        <NavLink to="/docs" className="nav-link scrollto pe-3 active"><i  className="bx bx-home"></i> <span>Docs</span></NavLink>
                        <NavLink to="/" className="nav-link scrollto  pe-3 "><i  className="bx bx-home"></i> <span>Estaciones</span></NavLink>
                        <li>  {isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}

export default BrandExample;