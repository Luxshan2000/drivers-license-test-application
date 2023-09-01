import React from 'react'
import VideoComponent from '../components/VideoComponent'


function ContentView() {
  return (
    <div className=' container mt-5' >
      <div className=' row' >
        <div className=' col-12   overflow-hidden'>
          <VideoComponent />
        </div>
      </div>  
    </div>
  )
}

export default ContentView