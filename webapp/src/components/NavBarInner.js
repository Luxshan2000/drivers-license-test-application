import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDeviceWidth } from '../context/DeviceWidthContext';
import UserInfo from './UserInfo';

function NavBarInner({SetCollapsed}) {
  const [showProfile, setShowProfile] = useState(false)
  
  const handleClick =()=>{
    SetCollapsed((prv) => !prv)
  }
  const handleProfile = ()=>{
    setShowProfile((prv)=> !prv)
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
        <span style={{cursor:'pointer'}} onClick={handleProfile} class="d-flex align-items-center text-dark text-decoration-none" >
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        </span>
      </div>
          
        
      </Container>
      <UserInfo showProfile={showProfile} />
    </Navbar>
  );
}

export default NavBarInner;