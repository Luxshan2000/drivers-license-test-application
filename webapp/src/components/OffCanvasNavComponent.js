import React, { useEffect, useState } from 'react'
import Profile from '../assets/images/profile-sample.png'
import { useDeviceWidth } from '../context/DeviceWidthContext'


function OffCanvasNavComponent({collapsed}) {
  const isSmall = useDeviceWidth()
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(collapsed){
        setWidth((prv) => {
            if(prv < 200) {
              return prv + 3
            }
            else{
              clearInterval(intervalId); 
            }
          });
      }
      else{
        setWidth((prv) => {
          if(prv > 0) {
            return prv - 3
          }
          else{
            clearInterval(intervalId); 
          }
        });
      }
        
    }, 1); 

    return () => {
      clearInterval(intervalId); 
    };
  }, [collapsed]);



  return (
    <div style={{width:isSmall ? `${collapsed? '100%': '0'}` : `${collapsed? 200: 0}px`, overflowX:'hidden', transition: `width ${isSmall? '100ms' :'200ms'} linear`}}  className="d-flex  flex-column flex-shrink-0 vh-100 m-0">
      <div className=''>
        <a href="/" className=" text-center d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <i style={{fontSize:"10em"}} class="bi w-100  bi-person-circle"/>
        </a>
      </div>
      <h6 className=" text-center">DriveSmart</h6>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <span className=' text-info' >MAIN MENU</span>
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <i class="bi bi-speedometer2 pe-2"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i class="bi bi-mortarboard pe-2"></i>
            Course
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i class="bi bi-credit-card pe-2"></i>
            Premium
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i class="bi bi-chat-left pe-2"></i>
            Contact us
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i class="bi bi-file-person pe-2"></i>
            About us
          </a>
        </li>
      </ul>

      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <span className=' text-info' >PREFERENCE</span>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark" aria-current="page">
            <i class="bi bi-gear pe-2"></i>
            Settings
          </a>
        </li>
      </ul>
      <hr/>
    </div>
  )
}

export default OffCanvasNavComponent