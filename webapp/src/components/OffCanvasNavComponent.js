import React from 'react'
import Profile from '../assets/images/profile-sample.png'


function OffCanvasNavComponent() {
  return (
    <div className=' col-12 container-fluid'>
      <div className=' pt-3 justify-content-center row'>
        <img style={{width:'200px', height:'auto' }} src={Profile} alt='Profile Pic' />
      </div>
      <div className=' mt-5 text-start'>
        <div style={{cursor:'pointer'}} className=' p-2'>
          <h6>Dashboard</h6>
        </div>
        <div style={{cursor:'pointer'}} className=' p-2' >
          <h6>Grades</h6>
        </div>
        <div style={{cursor:'pointer'}} className=' p-2' >
          <h6>Profile Settings</h6>
        </div>
        <div style={{cursor:'pointer'}} className=' p-2' >
          <h6>Site home</h6>
        </div>
        <div style={{cursor:'pointer'}} className=' p-2' >
          <h6>Logout</h6>
        </div>
      </div>
    </div>
  )
}

export default OffCanvasNavComponent