import React from 'react'
import ScriptComponent from '../components/ScriptComponent'
import VideoComponent from '../components/VideoComponent'


function ContentView() {
  return (
    <div className=' container ' >
      <div className=' text-center row'>
        <h5 className=' PageHeading' >1.Overview</h5>
      </div>
      <div className=' row' >
        <div className=' col-12   overflow-hidden'>
          <VideoComponent />
        </div>
      </div> 
      <div className='row mb-3 mt-1'>
        <ScriptComponent />
      </div> 
      <div className='row  mb-2 mt-1'>
        <div className='m-auto col-12 col-md-10 col-lg-10 ' >
          <div class="d-flex bg-secondary-subtle p-3 rounded-2 justify-content-between flex-row mb-3">
            <button type="button" class="btn w-25  btn-primary">Previous</button>
            <button type="button" class="btn w-25 btn-primary">Next</button>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default ContentView