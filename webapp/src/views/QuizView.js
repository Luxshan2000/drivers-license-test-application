import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FrameComponent from '../components/FrameComponent'
import { useModal } from '../context/ModalContext'

function QuizView() {
  const {setModal}  = useModal()
  const {id} = useParams()
  const showModal =()=>{
    setModal((prv)=>({
        ...prv,
        goto:`/dashboard/quiz/exam/${id}`,
        heading :"Start Attempt",
        ok: "Start",
        statement:"Quiz will be automatically submitted once the allocated time is over.",
        show:true
      }))
  }

  return (
    <FrameComponent>
      <div className=' container mt-2 p-1 p-md-3 p-lg-3   rounded-2   CourseHeading mb-5'>
        <div className=' m-0 col-11 col-md-10 col-lg-10 mx-auto' >
          <div className='text-center' >
            <h5 className='p-2 PageHeading' >Quiz for Road Sign</h5>
          </div>
          <div className=' d-flex flex-column justify-content-between min-vh-100 ' >
            <div style={{backgroundColor:"rgb(225, 238, 254)"}} className=' border-1 border shadow-sm  text-center   p-2 p-md-5 p-lg-5 rounded-3 mt-2 '>
              <h5 className=' CourseSubHeading'>Attempt No: 1</h5>
              <h5 className=' CourseSubHeading'>Allowed Attempts per day: 3</h5>
              <h5 className=' CourseSubHeading'>Time Limit: 20 minutes</h5>
              <h5 className=' CourseSubHeading'>Grade to pass: 75% out of 100%</h5>
              <div className=' container-fluid p-0 m-0' >
                <div class="table-responsive paragraph border border-1 p-0 rounded rounded-3">
                  <table class=" table table-bordered table-sm table-hover m-0">
                    <thead>
                      <tr className='table-secondary'>
                        <th scope="col">No</th>
                        <th scope="col">State</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Review</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=' table-success'>
                        <td scope="row">1</td>
                        <td className=' text-start'>Finished <br/>
                            Submitted Tuesday, 14 June 2022, 10:20 AM
                        </td>
                        <td>80%</td>
                        <td>Review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button onClick={showModal} style={{backgroundColor:"#004053d1",color:'white'}}  type="button" class="btn mt-3 mb-1 w-auto m-auto">Attempt Quiz Now</button>
              <h6>Your quiz will be automatically submitted once the allocated time is completed.</h6>
            </div>
            <div className='mt-1  ' >
              <div class="d-flex rounded-2 justify-content-between flex-row">
                <button style={{backgroundColor:"#004053bc",color:'white'}} type="button" class="btn ps-4 pe-4   ">Previous</button>
                <button style={{backgroundColor:"#004053bc",color:'white'}} type="button" class="btn ps-5 pe-5  opacity-50">Next</button>
              </div>   
            </div>
          </div>
        </div>
      </div>
    </FrameComponent>
  )
}

export default QuizView