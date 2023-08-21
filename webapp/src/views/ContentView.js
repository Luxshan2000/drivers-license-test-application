import React from 'react'
import SampleVideo from '../assets/video/sample.mp4'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import VideoComponent from '../components/VideoComponent'

function ContentView() {
  return (
    <div className='p-5 container-fluid'>
      <VideoComponent />
    </div>
  )
}

export default ContentView