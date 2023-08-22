import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/CSS/navbarStyle.css'

function NarbarComponent() {
  return (
    <div  className='navStyle' >
       <Navbar scrolling dark collapseOnSelect expand="md" className="bg-body-tertiary " >
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about us">About us</Nav.Link>
            <Nav.Link href="/#contact us">Contact us</Nav.Link>
            <Nav.Link href="#signup">Sign up</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
  )
}

export default NarbarComponent