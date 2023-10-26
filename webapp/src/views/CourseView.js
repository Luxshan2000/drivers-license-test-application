import React, { useEffect, useState } from "react";
import HeadingComponent from '../components/HeadingComponent'
import '../assets/CSS/courseviewStyle.css'
import OffCanvasNavComponent from '../components/OffCanvasNavComponent'
import OutFrame from '../components/OutFrame'
import FrameComponent from '../components/FrameComponent'
import axios from 'axios';
function CourseView() {

  const [heading, setHeading] = useState([])
  
  useEffect(()=>{
    axios.defaults.withCredentials = true
    axios.get('http://localhost:5000/api/material/topics')
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
    <div className=' courseview p-0 container-fluid'>
      <div className='d-flex m-0 flex-row justify-content-center'>
        
        <div className='col-lg-11 col-md-11 col-12 container'>
          <div  className='flex-shrink-1 flex-grow-1' >
            <div  className='courseHeading mt-3 mb-3  shadow-sm  p-3  container rounded-3   justify-content-center'>
                <div >
                  <div className=' text-center row'>
                    <h5 className=' PageHeading' >DriveSmart Sri Lanka: Road Rules, Signals, and License Exam Preparation</h5>
                    <div className=' ps-5 pe-5 p-2' >
                      <div style={{height:'13px'}} className="progress " role="progressbar" ariaLabel="Example with label" ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">
                        <div  className="progress-bar progress-bg" style={{width: "25%", fontSize:"10px"}}>25%</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            {heading.map((item) =><HeadingComponent key={item.name} heading={item} /> )}
          </div>
        </div>
      </div>
    </div>
    </FrameComponent>
  )
}

export default CourseView