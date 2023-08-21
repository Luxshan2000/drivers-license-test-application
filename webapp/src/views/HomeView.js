import React from 'react'
// import HomePageCArpic from '../assets/HomePageCarpic.svg'
import HeroSection from '../assets/HeroSection.jpeg'
import '../assets/CSS/homePageStyle.css'

function HomeView() {
  return (
    <div>
        <img className='image' src={HeroSection} alt='background' />
    </div>
  )
}

export default HomeView