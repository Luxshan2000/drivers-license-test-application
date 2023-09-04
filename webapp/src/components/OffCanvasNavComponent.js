import React from 'react'
import Profile from '../assets/images/profile-sample.png'


function OffCanvasNavComponent() {
  return (
    <div  className="d-flex  flex-column flex-shrink-0 vh-100 p-3 m-0">
      <div className=''>
        <a href="/" className=" text-center d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <i style={{fontSize:"3em"}} class="bi w-100  bi-person-circle"/>
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
          <a href="#" className="nav-link text-white">
            <i class="bi bi-mortarboard pe-2"></i>
            Course
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i class="bi bi-credit-card pe-2"></i>
            Premium
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i class="bi bi-chat-left pe-2"></i>
            Contact us
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i class="bi bi-file-person pe-2"></i>
            About us
          </a>
        </li>
      </ul>

      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <span className=' text-info' >PREFERENCE</span>
        <li className="nav-item">
          <a href="#" className="nav-link text-white" aria-current="page">
            <i class="bi bi-gear pe-2"></i>
            Settings
          </a>
        </li>
      </ul>

      <hr/>
      
      <div className="dropdown visually-hidden">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default OffCanvasNavComponent