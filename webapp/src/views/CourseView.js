import React from 'react'
import HeadingComponent from '../components/HeadingComponent'
import '../assets/CSS/courseviewStyle.css'
import OffCanvasNavComponent from '../components/OffCanvasNavComponent'
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
    <div className=' courseview p-0 container-fluid'>
      <div className='d-flex m-0 flex-row justify-content-center'>
        <div className=' m-0 p-0 bg-white shadow left-sidebar ' >
            <OffCanvasNavComponent/>
        </div>
        <div className='col-lg-9 col-md-11 col-12 container'>
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
  )
}

export default CourseView