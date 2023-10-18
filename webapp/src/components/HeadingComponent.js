import React, {  useState } from 'react'
import '../assets/CSS/headingStyle.css'
import { Link } from 'react-router-dom';


function HeadingComponent({heading}) {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{userSelect:'none'}} className='mt-3 p-0 mb-3 border border-1  shadow-sm   container rounded-3   justify-content-center'>
        <div 
          className={`p-3  rounded-3 pb-2  hover-effect`}
          style={{cursor:'pointer'}}
          data-bs-toggle="collapse" 
          onClick={()=>setToggle(prv=>!prv)}
          data-bs-target={`#id${heading._id}`} 
          aria-expanded={toggle}
          aria-controls={`id${heading._id}`}>
          <div className=' text-start row pe-2'>
            <h5 className=' col-11 CourseHeading'>
              {heading.no + ". "+ heading.title}
              <span className='instructionFamily badge ms-1  p-2 text-dark bg-success-subtle'>
                {heading.isCompleted ? "Completed!" : ""}
              </span>
            </h5>
            {!toggle? <i  class=" col-1 bi p-1 bi-chevron-down"></i>:<i  class=" col-1 bi p-1 bi-chevron-up"></i>}
            
          </div>
        </div>
        <div className="collapse" id={`id${heading._id}`}>
        <hr  className=' hrFirst mt-0 m-1'/>
          <div className='rounded-3 mb-3 p-3 pb-0 '>
            <div className='text-start mb-3 p-1'>
              <h5 className='CourseSubHeading'>
                <Link to={`/dashboard/course/heading/${heading.no}`} style={{cursor:'pointer'}}>
                  <span class=" rounded-5 bg-success-subtle p-2 m-1 ">
                    <i class="bi  bi-book"></i>
                  </span>
                  {heading.videoUrl? `${heading.no}.1 Interactive Video and notes` :"" }
                </Link>
              </h5>
              {/* <span className='instructionFamily badge m-1 p-2 text-dark bg-success-subtle'>
                Done: Complete the activity
              </span> */}
            </div>
            <div>
              <hr/>
            </div>
            <div className='text-start mb-3 p-1'>
              <h5 className='CourseSubHeading'>
                <Link to={`/dashboard/quiz/view/${heading.no}`}  style={{cursor:'pointer'}}>
                  <span class=" rounded-5 bg-danger-subtle p-2 m-1 ">
                    <i class="bi  bi-pencil"></i>
                  </span>
                  {`${heading.no}.2 Quiz`}
                </Link>
              </h5>
              <hr className=' text-success'/>
              <span className={`instructionFamily badge m-1 p-2 text-dark ${ heading.isCompleted ?"bg-success-subtle"  :"bg-danger-subtle"}`}>
                  { !heading.isCompleted ? "To do: Complete the activity" : "Done: Completed"}
              </span>
              <span className='instructionFamily badge m-1 p-2 text-dark bg-warning-subtle'>
              To unlock quizzes: Premium upgrade is required
              </span>
            </div>


              
          </div>
        </div>
    </div>
  )
}

export default HeadingComponent