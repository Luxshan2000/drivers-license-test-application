import React, { useEffect, useState } from 'react'
import FrameComponent from '../components/FrameComponent'
import QuestionComponent from '../components/QuestionComponent'
import axios from 'axios'
import Counter from '../components/Counter'
import { useParams } from 'react-router-dom';

function Exam() {
    const [question, setQuestion] = useState([])
    const { id } = useParams();

    const initialMinutes = 15;
    const initialSeconds = 0;


    const handleSubmit = ()=>{
        console.log("submitted!")
    }

    console.log(question)

    useEffect(()=>{
        axios.defaults.withCredentials = true
        axios.get(`http://localhost:5000/api/material/topic/quiz/${id}`)
            .then(response => {
                // Handle the successful response here
                setQuestion(response.data.questions)
                // console.log(response.data.questions)
                
    
                
            })
            .catch(error => {
                console.log(error)
    
    
            })
      },[])
  return (
    <FrameComponent>
        <div className='container min-vh-100 rounded-1 mb-1 mb-md-2 mb-lg-3 mt-1 mt-md-2 mt-lg-3 col-11 col-md-10 col-lg-10 mx-auto' >
            <div className=' row'>
                <div className=' ps-2 pe-2 p-1 rounded-1   text-center'>
                    <h5 className='PageHeading'>Quiz for Road sign</h5>
                </div>
            </div>
            <div style={{backgroundColor:"rgb(225, 238, 254)"}} className=' row rounded-2 mt-2 p-2'>
                <div  className=' min-vh-100'>
                    <div className=' container-fluid' >
                        <div style={{backgroundColor:"#004053bc"}} className=' row  rounded-2 p-3'>
                            <div className='col-12 col-md-8 col-lg-8 text-start'>
                                <h6>Started On: 22 August 2023, 11.09 PM</h6>
                                <h6>Status: Ongoing</h6>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 text-md-end text-lg-end'>
                                <Counter initialSeconds={initialSeconds} initialMinutes={initialMinutes}  onSubmit={handleSubmit}/>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <hr/>
                            {question.map((mcq, index) => (
                                <QuestionComponent id={index} mcq = {mcq} />
                            ))}
                            
                            {/* <QuestionComponent id={2} />
                            <QuestionComponent id={3} />
                            <QuestionComponent id={4} />
                            <QuestionComponent id={5} />
                            <QuestionComponent id={6} /> */}
                            {/* <QuestionComponent id={7} />
                            <QuestionComponent id={8} />
                            <QuestionComponent id={9} />
                            <QuestionComponent id={10} /> */}
                        </form>
                    </div>
                </div>
            </div>
            <div className=' row mt-1'>
                <div className=' container-fluid' >
                    <div className=' row'>
                        <div className='  col-6 col-md-8 col-lg-9  text-start'>
                        </div>
                        <button onClick={handleSubmit} className=' btn-success btn col-6   col-md-4 col-lg-3 rounded-2 p-2  text-center'>
                            Finish and Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </FrameComponent>
  )
}

export default Exam