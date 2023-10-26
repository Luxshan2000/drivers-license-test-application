import React, { useEffect, useState } from 'react'
import FrameComponent from '../components/FrameComponent'
import axios from 'axios'
import PracticeQuizComponent from '../components/PracticeQuizComponent'
import { Link, useLocation } from 'react-router-dom'
import ReviewComponent from '../components/PracticeQuizReviewComponent'

const userReview = (paperQuestions , userAnswers) => {
    var reviewAnswers = {}
    for (const userItem of userAnswers) {
              const result = paperQuestions.find(item => item._id === userItem.quesId)
              if (result.answer == userItem.ans) {
                  console.log("correct")
                  reviewAnswers[result._id] = {
                      'question' : result.question,
                      'options' : result.options,
                      'userAnswer':userItem.ans,
                      'feedback' : result.positiveFeedback,
                      'color' : 'green'
                  }    
              }else {
                console.log("wrong")
                  reviewAnswers[result._id] = {
                      'question' : result.question,
                      'options' : result.options,
                      'userAnswer': userItem.ans,
                      'feedback' : result.negativeFeedback,
                      'color' : 'red'
                  }   
              }   
          }
    return reviewAnswers;

}

function PracticeQuizReview() {
    const { state } = useLocation()
    const [test, setTest] = useState()
    const [quizNum, setQuizNum] = useState()
    const [question, setQuestion] = useState([])
    const [review, setReview] = useState([])
    const [grade, setGrade] = useState("")
    const [loading, setLoading] = useState(true)
    const [userQuiz, setUserQuiz] = useState()
    useEffect(() => {
        
        if(state?.test){
            setTest(state.test)
            setQuizNum(state.test.quizNumber)
            setQuestion(state.test.questions)
            setUserQuiz(state.test.user_quiz)
            setReview(userReview(state.test.questions,state.test.user_quiz.data))
            // console.log("Review",userReview(state.test.questions,state.test.user_quiz.data))
        // console.log(state.test.questions)
        setLoading(false)
        }
    }, [state])

    return (
        <FrameComponent>
            <div className='container min-vh-100 rounded-1 mb-1 mb-md-2 mb-lg-3 mt-1 mt-md-2 mt-lg-3 col-11 col-md-10 col-lg-10 mx-auto' >
                <div className=' row'>
                    <div className=' ps-2 pe-2 p-1 rounded-1   text-center'>
                        <h5 className='PageHeading'>Practice Quiz {quizNum} Paper Review</h5>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(225, 238, 254)" }} className=' row rounded-2 mt-2 p-2'>
                    <div className=' min-vh-100'>
                        <div className=' container-fluid' >
                            <div style={{ backgroundColor: "#004053bc" }} className=' row  rounded-2 p-3'>
                                <div className='col-12 col-md-8 col-lg-8 text-start'>
                                    <h6>Started On:{userQuiz ? userQuiz.startOn : ""}</h6>
                                    <h6>Status: Finished</h6>
                                </div>
                                <div className='col-12 col-md-4 col-lg-4 text-md-end text-lg-end'>
                                    <h6 className=' text-white'>Grade : {userQuiz ? userQuiz.grade : ""}%</h6>
                                </div>
                            </div>
                            <div>
                                <hr />
                                {
                                    Object.keys(review).map((key, index) => (
                                        <ReviewComponent id={key} mcq={review[key]} />
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' row mt-1'>
                    <div className=' container-fluid' >
                        <div className=' row'>
                            <div className='  col-6 col-md-8 col-lg-9  text-start'>
                            </div>
                            <Link to='/dashboard/practice' type='button' className='btn-success btn col-6   col-md-4 col-lg-3 rounded-2 p-2  text-center'>
                                Finish Review
                            </Link>
                            {/* <button onClick={handleSubmit} className=' btn-success btn col-6   col-md-4 col-lg-3 rounded-2 p-2  text-center'>
                                Finish and Submit
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </FrameComponent>
    )
}

export default PracticeQuizReview;