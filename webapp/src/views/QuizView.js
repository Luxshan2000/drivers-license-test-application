import React from 'react'

function QuizView() {
  return (
    <div className=' container mt-1   CourseHeading mb-5'>
      <div className=' m-0 col-11 col-md-10 col-lg-10 mx-auto' >
        <div className='text-center' >
          <h5 className=' bg-primary p-2    rounded-2' >Quiz for Road Sign</h5>
        </div>
        <div className=' d-flex flex-column justify-content-between min-vh-100 ' >
          <div className=' text-center  bg-secondary-subtle shadow-sm p-2 p-md-5 p-lg-5 rounded-3 mt-5 '>
            <h5>Attempt No: 1</h5>
            <h5>Allowed Attempts per day: 3</h5>
            <h5>Time Limit: 20 minutes</h5>
            <h5>Grade to pass: 75% out of 100%</h5>
            <button type="button" class="btn mb-1 w-auto m-auto btn-success">Attempt Quiz Now</button>
            <h6>Your quiz will be automatically submitted once the allocated time is completed.</h6>
          </div>
          <div className='mt-3  ' >
            <div class="d-flex bg-secondary-subtle p-3 rounded-2 justify-content-between flex-row">
              <button type="button" class="btn ps-4 pe-4 w-auto  btn-primary">Previous</button>
              <button type="button" class="btn ps-5 pe-5 w-auto  btn-primary opacity-50">Next</button>
            </div>   
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizView