import React from 'react'
import HeroSectionImage from '../assets/HeroSection.jpeg'
import '../assets/CSS/homePageStyle.css'
import Button from 'react-bootstrap/Button';

function HeroSection() {
    return (
        <div className='container-fluid hero-image' style={{ height: '100vh', display: 'flex', justifyContent: "center", alignItems: "center" }}>
            {/* <img className='image img-fluid' src={HeroSectionImage} alt='background' /> */}
            <div className='row blurEffect' style={{ width: '500px', display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                {/* <h1 className='header' style={{ height: '30vh', alignItems: 'center', display: 'flex', justifyContent: 'center', fontWeight:'bold', fontSize: '3em',textAlign:'center' }}>
                Welcome to DriveSmart
                    <div className='col-12 col-md-6 col-lg-5'>
                        Welcome to DriveSmart
                    </div>
                </h1> */}
                <div className='col-12 col-md-6 col-lg-5'>
                    <h1 className='header' style={{ height: '30vh', alignItems: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '3em', textAlign: 'center' }} >
                        Welcome to DriveSmart
                    </h1>
                </div>
                <div>
                    <p style={{ fontSize: '1em', textAlign: 'center' }}>
                        Are you ready to face your driving license exams confidently or are you feeling nervous?This is your  perfect chance.Go through our course and level up.
                        Get an experience of the actual Driving Test exams.

                    </p>
                </div>

                <div className='row' style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div className='col-12 col-md-6 col-lg-5 m-3 p-1'>
                        <Button className='task-button'>Getting Started</Button>
                    </div>


                    <div className='col-12 col-md-6 col-lg-5 m-3 p-1'>
                        <Button className='task-button'>Contact us</Button>
                    </div>




                </div>
            </div>


        </div>

    )
}

export default HeroSection