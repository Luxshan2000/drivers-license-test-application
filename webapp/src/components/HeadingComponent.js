import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function HeadingComponent() {
  const heading = {
    name: "2. Who can apply for driving license?",
    status:"Completed!",
    availability:"Free",
    video:"URL Video",
    quiz:"QuizId",
    subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
  }
  return (
    <div className=' shadow  bg-success container rounded-3  p-3 justify-content-center'>
        <div 
          data-bs-toggle="collapse" 
          data-bs-target="#content" 
          aria-expanded="false" 
          aria-controls="content">
          <div className=' row'>
            <h4>{heading.name}</h4>
          </div>
          <div className=' row'>
            <h5 className=' col-6'>{heading.status}</h5>
            <h5 className=' col-6'>{heading.availability}</h5>
          </div>
        </div>
        <div class="collapse" id="content">
          <div className='rounded-3 ' style={{backgroundColor:"lightgreen"}} >
            <div  className=' p-3 row'>
              <h5 className=' col-12 col-md-6 col-lg-6 text-start'>{heading.subHeadings[0]}</h5>
              <h5 className=' col-12 col-md-6 col-lg-6 text-sm-start text-md-end text-lg-end'>{heading.subHeadings[1]}</h5>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeadingComponent