import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../assets/CSS/signUp.css'

function UpdateProfile() {
    return (
        <Form style={{ padding: '20px' }}>
            <Row className="mb-3 col-12 col-md-6 col-lg-6">
                <Col className='col-12 col-md-6 col-lg-6'>
                    <Form.Group controlId="formGridF_name">
                        <Form.Label >First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                </Col>

                <Col className='col-12 col-md-6 col-lg-6'>
                    <Form.Group controlId="formGridL_name">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                </Col>

            </Row>

            <Form.Group className="mb-3 col-12 col-md-6 col-lg-6" controlId="formGridEmail">
                <Form.Label >Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>


            <Form.Group className="mb-3 col-12 col-md-6 col-lg-6" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3 col-6 col-md-3 col-lg-3" controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </Form.Select>


            </Form.Group>


            <Row className='col-3 col-md-1 col-lg-1'>
                <Button variant="primary" type="submit" className='task-button' >
                    Save
                </Button>
            </Row>

        </Form>
    );
}

export default UpdateProfile;