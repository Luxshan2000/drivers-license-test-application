import React from 'react'
import HeroSectionImage from '../assets/HeroSection.jpeg'
import '../assets/CSS/homePageStyle.css'
import Button from 'react-bootstrap/Button';

function HeroSection() {
    return (
        <div className='hero-image' style={{ height: '100vh',display:'flex',justifyContent:"center",alignItems:"center" }}>
            {/* <img className='image img-fluid' src={HeroSectionImage} alt='background' /> */}
            <div className='blurEffect' style={{width : '50%',display:"flex",flexDirection:"column"}}>
                <h1 className='header' style={{ height: '30vh', alignItems: 'center', display: 'flex', justifyContent: 'center', fontWeight: "bolder", fontSize: 64 }}>
                    <div>
                        Welcome to DriveSmart
                    </div>
                </h1>
                <p style={{ fontSize: 20 }}>
                    <div>
                        Are you ready to face your driving license exams confidently?
                    </div>
                </p>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <div style={{marginRight:20,marginBottom:20}}>
                    <Button variant="info">Getting Started</Button>
                    </div>
                    <div style={{marginRight:20}}>
                    <Button variant="info">Contact us</Button>
                    </div>
                
                </div>
            </div>


        </div>
        // <div class="hero-image">
        //    
        // </div>
    )
}

export default HeroSection