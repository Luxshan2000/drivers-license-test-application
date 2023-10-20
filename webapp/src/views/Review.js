import React, { useEffect, useState } from 'react'
import FrameComponent from '../components/FrameComponent'
import QuestionComponent from '../components/QuestionComponent'
import axios from 'axios'
import Counter from '../components/Counter'
import { useNavigate, useParams } from 'react-router-dom';

function Review() {
  

    const [question, setQuestion] = useState([])
    const { id } = useParams();
    const navigate = useNavigate()
    const [startTime,setStartTime] = useState("2023-10-20T05:42:41.445Z")
    const [endTime, setEndTime] = useState("")

    const [answers, setAnswers] = useState([])

    const initialMinutes = 15;
    const initialSeconds = 0;


    


    const handleReview = ()=>{
        navigate(`/dashboard/quiz/view/${id}`, {replace:true})
    }

    // console.log(question)

    useEffect(()=>{
        axios.defaults.withCredentials = true
        axios.get(`http://localhost:5000/api/material/topic/quiz/${id}`)
            .then(response => {
                // Handle the successful response here
                setQuestion(response.data.array.questions)

               

                const end = new Date(response.data.startOn)
                end.setMinutes(end.getMinutes() + 1)

                

                setStartTime(response.data.startOn)
                setEndTime(end)


                console.log(response.data.array.questions)
                 
                
    
                
            })
            .catch(error => {
                console.log("error")
    
    
            })
      },[])

      const currentTime = new Date();




      const options = {
        weekday: 'long',   // Full weekday name (e.g., Tuesday)
        day: 'numeric',    // Day of the month (e.g., 14)
        month: 'long',     // Full month name (e.g., June)
        year: 'numeric',   // 4-digit year (e.g., 2022)
        hour: 'numeric',   // Hour in 12-hour clock format (e.g., 10)
        minute: 'numeric', // Minutes (e.g., 20)
        second: 'numeric', // Seconds (e.g., 52)
        hour12: true       // Use 12-hour clock (AM/PM)
      };


  return (
    <FrameComponent>
        <form  className='container min-vh-100 rounded-1 mb-1 mb-md-2 mb-lg-3 mt-1 mt-md-2 mt-lg-3 col-11 col-md-10 col-lg-10 mx-auto' >
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
                                <h6>Start on: {new Date(startTime).toLocaleTimeString('en-US',options)}</h6>
                                <h6>Finished on: {new Date(startTime).toLocaleTimeString('en-US',options)}</h6>
                                <h6>Status: Finished</h6>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 text-md-end text-lg-end'>
                                {"Time: 30 min"}
                            </div>
                        </div>
                        <div  >
                            <hr/>
                            {question.map((mcq, index) => (
                                // <QuestionComponent  handleAnswerChange={handleAnswerChange} key={index} no={index} id={mcq._id} mcq = {mcq} />
                                <div className=' mb-3'>
                                    <h6 className=' p-0 m-0'>{index+1+") "+mcq.ques}</h6>
                                    {/* <h6 className=' p-0 m-0'>{mcq}</h6> */}
                                    <ul style={{padding:'0',margin:'0',marginLeft:'5px'}}>
                                        {mcq.options.map((ans,index) => 
                                        <li key={index} style={{listStyleType:'none'}} >
                                        <label  className="form-check-label" htmlFor={mcq._id+index}>
                                            <input 
                                            disabled
                                            checked = {ans == mcq.answer ? true : false }
                                            required
                                            className="form-check-input me-2" 
                                            type="radio" 
                                            value={ans}
                                            name={mcq._id}
                                            
                                            id={mcq._id+index}/>
                                            {ans}
                                        </label>
                                        </li>)}
                                    </ul>
                                    <h6 className=' p-0 m-0 text-success'>correct answer: {mcq.answer}</h6>
                                    <h6 className=' p-0 m-0 ' style={{color:'gray'}}>Feedback: {mcq.posFeedback}</h6>
                                </div>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className=' row mt-1'>
                <div className=' container-fluid' >
                    <div className=' row'>
                        <div className='  col-6 col-md-8 col-lg-9  text-start'>
                        </div>
                        <button onClick={handleReview}   className=' btn-success btn col-6   col-md-4 col-lg-3 rounded-2 p-2  text-center'>
                            Finish and Review
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </FrameComponent>
  )
}

export default Review