import React, { useEffect, useState } from 'react'
import '../assets/CSS/headingStyle.css'



function HeadingComponent({heading}) {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{userSelect:'none'}} className='mt-3 p-0 mb-3 border border-1  shadow-sm   container rounded-3   justify-content-center'>
        <div 
          className={`p-3  rounded-3  hover-effect`}
          style={{cursor:'pointer'}}
          data-bs-toggle="collapse" 
          onClick={()=>setToggle((prv=>!prv))}
          data-bs-target={`#${heading.id}`} 
          aria-expanded={toggle}
          aria-controls={`${heading.id}`}>
          <div className=' text-start row '>
            <h5 className=' col-11'>
              {heading.name}
            </h5>
            {!toggle? <i  class=" col-1 bi bi-chevron-up"></i>:<i  class=" col-1 bi bi-chevron-down"></i>}
            
          </div>
        </div>
        <div className="collapse" id={`${heading.id}`}>
        <hr className=' mt-0 m-1'/>
          <div className='rounded-3 mb-3 p-3 pb-0 '  >
              <h5  className='text-start p-1'><a href='/content' style={{cursor:'pointer'}}>{heading.subHeadings[0]}</a></h5>
              <h5  className='text-start p-1'><a href='/quiz' style={{cursor:'pointer'}}>{heading.subHeadings[1]}</a></h5>
          </div>
        </div>
    </div>
  )
}

export default HeadingComponent