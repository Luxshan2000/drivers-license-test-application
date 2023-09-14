// src/components/AboutUs.js
import React from 'react';
import { Container} from 'react-bootstrap';
import FrameComponent from '../components/FrameComponent'

const AboutUsView = () => {
  return (
    <FrameComponent>
        <Container>   
                <div className="mb-2 mt-2 mr-2 p-4" style={{borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <h2>About Us</h2>
                    <p>Our mission is to empower individuals with the knowledge and skills needed to navigate the roads confidently and securely.Our course will guide you from the beginning to the end.It doesn’t matter whether you are new learner or not,we have got you covered.Start practicing today and pave the way to a life time of safe and enjoyable driving.Your road to success begins here.</p>
                    <p>Our mission is to empower individuals with the knowledge and skills needed to navigate the roads confidently and securely.Our course will guide you from the beginning to the end.It doesn’t matter whether you are new learner or not,we have got you covered.Start practicing today and pave the way to a life time of safe and enjoyable driving.Your road to success begins here.</p>
                    <p>Our mission is to empower individuals with the knowledge and skills needed to navigate the roads confidently and securely.Our course will guide you from the beginning to the end.It doesn’t matter whether you are new learner or not,we have got you covered.Start practicing today and pave the way to a life time of safe and enjoyable driving.Your road to success begins here.</p>
                    <p>Our mission is to empower individuals with the knowledge and skills needed to navigate the roads confidently and securely.Our course will guide you from the beginning to the end.It doesn’t matter whether you are new learner or not,we have got you covered.Start practicing today and pave the way to a life time of safe and enjoyable driving.Your road to success begins here.</p>
                    
                </div>
                <div className=" mb-2 mt-2 mr-2 p-4" style={{borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <h2>Our Team</h2>
                    <ul>
                        <li>Oshan Madawa - CPO</li>
                        <li>Kamadi Liyanage - COO</li>
                        <li>Luxshan  - CTO</li>
                        <li>Sarah Davis - CFO</li>
                    </ul>
                </div>
        </Container>
    </FrameComponent>
    
  );
};

export default AboutUsView;
