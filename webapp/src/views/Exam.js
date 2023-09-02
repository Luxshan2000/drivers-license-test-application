import React from 'react'
import QuestionComponent from '../components/QuestionComponent'

function Exam() {
  return (
    <div className='container min-vh-100 rounded-1 mb-1 mb-md-2 mb-lg-3 mt-1 mt-md-2 mt-lg-3 col-11 col-md-10 col-lg-10 mx-auto' >
        <div className=' row'>
            <div className=' ps-2 pe-2 p-1 rounded-1  bg-primary text-center'>
                <h5>Quiz for Road sign</h5>
            </div>
        </div>
        <div className=' row'>
            <div className=' min-vh-100 mt-2 ps-2 pe-2  rounded-1  bg-primary-subtle p-2'>
                <div className=' container-fluid' >
                    <div className=' row'>
                        <div className='col-12 col-md-9 col-lg-9 text-start'>
                            <h6>Started On: 22 August 2023, 11.09 PM</h6>
                            <h6>Status: Ongoing</h6>
                        </div>
                        <div className='col-12 col-md-3 col-lg-3 text-md-end text-lg-end'>
                            <h6>Remaining: 10 min, 23 Sec</h6>
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <QuestionComponent />
                        <QuestionComponent />
                        <QuestionComponent />
                        <QuestionComponent />
                        <QuestionComponent />
                        <QuestionComponent />
                        <QuestionComponent />
                        <QuestionComponent />
                        <QuestionComponent />
                        <QuestionComponent />
                    </div>
                </div>
            </div>
        </div>
        <div className=' row mt-1'>
            <div className=' container-fluid' >
                <div className=' row'>
                    <div className=' col-6 col-md-8 col-lg-9  text-start'>
                    </div>
                    <div className='col-6 col-md-4 col-lg-3 rounded-2 p-2  text-center bg-primary'>
                        <h6 className=' p-0 m-0'>Finish and Submit</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Exam