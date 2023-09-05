import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDeviceWidth } from '../context/DeviceWidthContext';
import UserInfo from './UserInfo';

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
          <div className="">
        <a href="#" class="d-flex align-items-center text-dark text-decoration-none" >
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        </a>
       
      </div>
          
        
      </Container>
      <UserInfo/>
    </Navbar>
  );
}

export default NavBarInner;