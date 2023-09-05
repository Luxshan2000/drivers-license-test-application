import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../assets/CSS/signUp.css'
import Image from 'react-bootstrap/Image';

function UpdateProfile() {
    return (
        <div className="container-fluid" style={{ padding: '50px', height: '100vh' }}>
            <Form>
                <h2>Account Settings</h2>

                <Col xs={6} md={4} lg={3} className='mb-3'>
                    <Image src={require("../assets/images/profile-sample.png")} style={{ width: '200px', height: '200px' }} roundedCircle />
                </Col>




                <Form.Group as={Col} className="mb-3 col-12 col-md-3 col-lg-3">
                    <Form.Label >Edit Profile Picture</Form.Label>
                    <Form.Control type="file" placeholder="Choose image" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} md='3' lg='3' controlId="validationFormik01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md='3' lg='3' controlId="validationFormik02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                        />
                    </Form.Group>

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

                <div className="col-12 col-md-6 col-lg-6" style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                    <Button className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ textAlign: 'start' }}>
                            Save
                        </div>
                    </Button>
                </div>




            </Form>
        </div>
    );
}

export default UpdateProfile;