import React from 'react'
import { Link } from 'react-router-dom'
function UserInfo() {
  return (
    <div style={{position:'fixed', width:'220px',  left:'10px', top:'65px', maxHeight:'100vh' ,overflowY:'scroll'}} className=" bg-dark-subtle  px-2 border border-2  border-primary-subtle rounded-3 py-3">
        <h6 className=" text-center">DriveSmart</h6>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto ">
        <span className=' text-info' >MAIN MENU</span>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link active" >
            <i class="bi bi-speedometer2 pe-2"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/course" className="nav-link text-dark">
            <i class="bi bi-mortarboard pe-2"></i>
            Course
          </Link>
        </li>
        <li>
          <Link to="/dashboard/premium" className="nav-link text-dark">
            <i class="bi bi-credit-card pe-2"></i>
            Premium
          </Link>
        </li>
        <li>
          <Link to="/#contactus" className="nav-link text-dark">
            <i class="bi bi-chat-left pe-2"></i>
            Contact us
          </Link>
        </li>
        <li>
          
          <Link className="nav-link text-dark" to='/#aboutus'>
            <i class="bi bi-file-person pe-2"></i>
            About us
          </Link>
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

export default UserInfo