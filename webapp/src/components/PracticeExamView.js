import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card'
import FrameComponent from '../components/FrameComponent'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../utils/constants'
function PracticeExamView() {
    const [tests,setTests] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.defaults.withCredentials = true
        axios.get(`${BACKEND_URL}/api/practiceQuizzes/getPracticeQuizPapers`,{
            headers: {
                token: `${token}` // Set the token as the "Authorization" header
              }
        })
            .then(response => {
                // Handle the successful response here
                //[{quizNumber : 1,time : 20,questions : [],user_quiz : [{id : 1,grade : '10'}]},{quizNumber : 1,time : 20,questions : []},{quizNumber : 1,time : 20,questions : []},]
                setTests(response.data)
                console.log(response.data)



            })
            .catch(error => {
                console.log(error)


            })
    }, [])
    
  return (
    <FrameComponent>
        <Container className=' p-3'>
            <h4 className=' text-center PageHeading'>Practice test</h4>
            <Row className=' p-5'>
                { 
                    tests.map((test,index)=>(
                    <Col className=' mx-auto mb-3' lg={6} sm={11} >
                            <Card border='info' className=' h-100 rounded-4 hover-effect' style={{backgroundColor:'lightblue', cursor:'pointer'}}>
                                <Card.Body>
                                    <Card.Title className=' text-center'>Practice test - {test.quizNumber}</Card.Title>
                                    <Card.Text>
                                        {/* {test.courseFinished && 
                                        <>
                                            <span className={`CourseSubHeading badge m-1 p-2 text-dark bg-${ test.completed? 'success' : 'danger'}-subtle`}>
                                                {test.completed ? 
                                                    <div>
                                                        <Link to='/dashboard/practice/review' style={{marginRight : 20}}>Quiz Review  |</Link>
                                                        <Link to='/dashboard/practice/practiceQuiz' style={{marginRight : 20}}>Reattempt quiz</Link>  
                                                    </div>
                                                              
                                                 :
                                                        <Link to='/dashboard/practice/practiceQuiz'>Attempt quiz</Link>}
                                            </span>
                                            { test.grade && <span className='CourseSubHeading badge m-1 p-2 text-dark bg-success-subtle'>
                                                Grade: {test.grade}
                                            </span>}
                                        </>
                                        } */}
                                        {test.user_quiz ?  
                                        <>
                                            <span className={`CourseSubHeading badge m-1 p-2 text-dark bg-success-subtle`}>
                                                    <Link to='/dashboard/practice/review' state={{test : test}} style={{marginRight : 20}}>Quiz Review</Link>
                                            </span>
                                            {/* <span className={`CourseSubHeading badge m-1 p-2 text-dark bg-success-subtle`}>
                                                <Link to='/dashboard/practice/practiceQuiz' state={{test : test}} style={{marginRight : 20}}>Reattempt quiz</Link>
                                            </span> */}
                                            <span className='CourseSubHeading badge m-1 p-2 text-dark bg-success-subtle'>
                                                Grade: {test.user_quiz.grade}
                                            </span>
                                        </>
                                        :
                                        <span className={`CourseSubHeading badge m-1 p-2 text-dark bg-danger-subtle`}>
                                        <Link to='/dashboard/practice/practiceQuiz' state={{test : test}} style={{marginRight : 20}}>Attempt Quiz</Link>
                                        </span>
                                        }
                                        

                                                          
                                
                                                              
                                                 
                                        
                                
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        
                    </Col>))}
            </Row>
        </Container>
    </FrameComponent>
  )
}

export default PracticeExamView