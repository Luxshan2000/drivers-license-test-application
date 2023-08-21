import React from 'react'
import HeadingComponent from '../components/HeadingComponent'
import OffCanvasNavComponent from '../components/OffCanvasNavComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../assets/CSS/headingStyle.css'
import '../assets/CSS/courseviewStyle.css'
function CourseView() {
  const heading = [
    {
      id:"1",
      name: "1. Overview",
      status:"Completed!",
      availability:"Free",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
    },
    {
      id:"2",
      name: "2. Who can apply for driving license?",
      status:"Completed!",
      availability:"Free",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
    },
    {
      id:"3",
      name: "3. What are the ways to apply License?",  
      status:"Completed!",
      availability:"Free",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
    },
    {
      id:"4",
      name: "4. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
    },
    {
      
      id:"5",
      name: "5. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
      
    },
    {
      
      id:"6",
      name: "6. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
      
    },
    {
      
      id:"7",
      name: "7. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
      
    },
    {
      
      id:"8",
      name: "8. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
      
    }]

  return (
    <div className=' p-0 container-fluid'>
      <div className='d-flex m-0 flex-row justify-content-center'>
        <div className=' hide-section m-0 bg-white shadow col-sm-12 col-md-6 col-lg-3  flex-shrink-1' >
          <div >
            <OffCanvasNavComponent/>
          </div>
        </div>
        <div className=' p-lg-5 p-md-3  p-sm-2 flex-shrink-1 flex-grow-1  ' >
          <div className=' bg-secondary-subtle mt-3 mb-3  shadow-sm  p-3  container rounded-3   justify-content-center'>
              <div >
                <div className=' text-center row'>
                  <h5 >DriveSmart Sri Lanka: Road Rules, Signals, and License Exam Preparation</h5>
                  <div className=' p-2' >
                    <div className="progress" role="progressbar" ariaLabel="Example with label" ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">
                      <div className="progress-bar bg-success" style={{width: "25%"}}>25%</div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          {heading.map((item) =><HeadingComponent heading={item} /> )}
        </div>
      </div>
      
    </div>
  )
}

export default CourseView