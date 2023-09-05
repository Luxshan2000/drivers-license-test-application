import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDeviceWidth } from '../context/DeviceWidthContext';

function NavBarInner({SetCollapsed}) {
  
  
  const handleClick =()=>{
    SetCollapsed((prv) => !prv)
  }
    
  
  return (
    <Navbar className="bg-body-tertiary m-0">
      <Container className=' ' >
        <Navbar.Brand   >
            <span style={{cursor:'pointer'}} onClick={handleClick} className=' badge text-dark bg-dark-subtle'>
                <i style={{fontSize:'1.5em'}} class="bi bi-list"></i>
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <div className="dropdown dropstart">
        <a href="#" class="d-flex align-items-center text-dark text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        </a>
        <ul className="dropdown-menu  bg-info-subtle text-small shadow">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarInner;