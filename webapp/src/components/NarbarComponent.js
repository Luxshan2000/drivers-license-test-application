import React from 'react'
import '../assets/CSS/navbarStyle.css'

function NarbarComponent() {
  return (
    <div  className='navStyle' >
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about us">About us</Nav.Link>
            <Nav.Link href="#contact us">Contact us</Nav.Link>
            <Nav.Link href="#signup">Sign up</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
  )
}

export default NarbarComponent