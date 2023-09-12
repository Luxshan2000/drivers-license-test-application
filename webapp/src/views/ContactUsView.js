import React from 'react'
import FrameComponent from '../components/FrameComponent'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactUsView() {
  return (
    <FrameComponent>
        <Container>
      <Row className="mb-4 mr-2">
        <div className="col-md-6 mb-4 mt-4 mr-2 p-4" style={{borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </div>
        {/* <div className="my-2"></div> */}
        <div className=" col-md-6 mb-4 mt-4 ml-2"> 
          <div className='p-4'  style={{ backgroundColor: '#EDF7FD' , borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="mb-4">Contact Information</h2>
            <p>123 Main Street</p>
            <p>City, State ZIP</p>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </Row>
    </Container>
    </FrameComponent>
    
  )
}

export default ContactUsView