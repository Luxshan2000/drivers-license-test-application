import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card'
import FrameComponent from '../components/FrameComponent'
import { Link } from 'react-router-dom'
function PracticeExamView() {
    const tests = [
        {
            no:'01',
            completed:true,
            premuim:true,
            courseFinished:true,
            grade:'75%',
            time: '20 minutes'
        },
        {
            no:'02',
            completed:false,
            premuim:true,
            courseFinished:true,
            grade:'',
            time: '20 minutes'
        },
        {
            no:'03',
            completed:false,
            premuim:true,
            courseFinished:true,
            grade:'',
            time: '20 minutes'
        },
        {
            no:'04',
            completed:false,
            courseFinished:true,
            grade:'',
            time: '20 minutes'
        }
    ]
  return (
    <FrameComponent>
        <Container className=' p-3'>
            <h4 className=' text-center PageHeading'>Practice test</h4>
            <Row className=' p-5'>
                { 
                    tests.map((test)=>(
                    <Col className=' mx-auto mb-3' lg={6} sm={11} >
                        <Link to='/dashboard/practice/practiceQuiz'>
                            <Card border='info' className=' h-100 rounded-4 hover-effect' style={{backgroundColor:'lightblue', cursor:'pointer'}}>
                                <Card.Body>
                                    <Card.Title className=' text-center'>Practice test - {test.no}</Card.Title>
                                    <Card.Text>
                                        {test.courseFinished && 
                                        <>
                                            <span className={`CourseSubHeading badge m-1 p-2 text-dark bg-${ test.completed? 'success' : 'danger'}-subtle`}>
                                                {test.completed ? 'Done: Complete the test' : "To do: Complete the activity"}
                                            </span>
                                            { test.grade && <span className='CourseSubHeading badge m-1 p-2 text-dark bg-success-subtle'>
                                                Grade: {test.grade}
                                            </span>}
                                        </>
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>))}
            </Row>
        </Container>
    </FrameComponent>
  )
}

export default PracticeExamView