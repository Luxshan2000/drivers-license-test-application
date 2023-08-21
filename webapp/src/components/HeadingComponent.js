import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../assets/CSS/headingStyle.css'



function HeadingComponent({heading}) {

  return (
    <div className='hover-effect mt-3 mb-3  shadow-sm  p-3  container rounded-3   justify-content-center'>
        <div 
          style={{cursor:'pointer'}}
          data-bs-toggle="collapse" 
          data-bs-target={`#${heading.id}`} 
          aria-expanded="false" 
          aria-controls={`${heading.id}`}>
          <div className=' text-start row'>
            <h5 className=' col-12'>{heading.name}</h5>
          </div>
        </div>
        <div class="collapse" id={`${heading.id}`}>
          <div className='rounded-3 p-3 pb-0 '  >
            <div  className=' row'>
              <hr/>
              <h5  className='   col-12 col-md-6 col-lg-6 text-start'><a href='/' style={{cursor:'pointer'}}>{heading.subHeadings[0]}</a></h5>
              <h5  className='    col-12 col-md-6 col-lg-6 text-start text-md-end text-lg-end'><a href='/' style={{cursor:'pointer'}}>{heading.subHeadings[1]}</a></h5>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeadingComponent