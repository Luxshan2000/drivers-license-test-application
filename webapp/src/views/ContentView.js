import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FrameComponent from '../components/FrameComponent'
import ScriptComponent from '../components/ScriptComponent'
import VideoComponent from '../components/VideoComponent'
import axios from 'axios'
import { BACKEND_URL } from '../utils/constants'

function ContentView() {
  const { id } = useParams()
  const [heading, setHeading] = useState()



  useEffect(()=>{
    axios.defaults.withCredentials = true
    axios.get(`${BACKEND_URL}/api/material/topic/${id}`)
        .then(response => {
            // Handle the successful response here
           setHeading(response.data)
          
            

            
        })
        .catch(error => {
            console.log(error)


        })
  },[])



  return (
    <FrameComponent>
      {heading && <div  className=' container-fluid mt-2 pt-2 ' >
        <div className=' text-center row'>
          <h5 className=' PageHeading' >{heading.no+". "+heading.title}</h5>
        </div>
        <div className=' row' >
          <div className=' col-12   overflow-hidden'>
            <VideoComponent />
          </div>
        </div> 
        <div className='row m-0 mb-3 mt-1 p-0'>
          <ScriptComponent data={heading.script} />
        </div> 
        <div className='row   mt-1'>
          <div className='m-auto col-12 col-md-10 col-lg-10 ' >
            <div class="d-flex   rounded-2 justify-content-between flex-row mb-3">
              <button style={{backgroundColor:"#004053bc",color:'white'}} type="button" class="btn w-25 ">Previous</button>
              <button style={{backgroundColor:"#004053bc",color:'white'}} type="button" class="btn w-25 opacity-50">Next</button>
            </div>   
          </div>
        </div>
      </div>}
    </FrameComponent>
  )
}

export default ContentView