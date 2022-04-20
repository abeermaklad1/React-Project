import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export default function OurNavbar() {
  return (
        <Navbar style={{backgroundColor: 'rgb(107, 164, 193 )'}} variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Navbar <span></span></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/home">Home</NavLink>
            <NavLink className='nav-link' to="/counter">Counter</NavLink>
            <NavLink className='nav-link' to="/todos">Todos</NavLink>
            <NavLink className='nav-link' to="/about">About</NavLink>
            <NavLink className='nav-link' to="/profile">Profile</NavLink>
            <NavLink className='nav-link' to="/login">Login</NavLink>
          </Nav>
          <button className="btn btn-outline-dark" >Dark</button>
        </Container>
        </Navbar>
  );
}
