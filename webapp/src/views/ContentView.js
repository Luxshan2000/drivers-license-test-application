import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import VideoComponent from '../components/VideoComponent'
import ScriptComponent from '../components/ScriptComponent'
import PopQuizComponent from '../components/PopQuizComponent'

function ContentView() {
  return (
    <div className='p-5 container rounded border-dark-subtle border border-2 shadow-lg mb-3 mt-3 bg-info-subtle'>
      <div className=' mb-1 justify-content-center m-auto shadow-sm p-1 rounded-2 bg-info col-12 col-lg-10'>
        <h4>1. Overview</h4>
      </div>
      <div  style={{position:'relative'}}>
        <VideoComponent />
        <PopQuizComponent />
      </div>
      
      <hr/>
      <ScriptComponent />
    </div>
  )
}

export default ContentView