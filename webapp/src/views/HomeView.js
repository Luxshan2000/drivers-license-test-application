import React from 'react'
// import HomePageCArpic from '../assets/HomePageCarpic.svg'
import HeroSection from '../assets/HeroSection.jpeg'
import '../assets/CSS/homePageStyle.css'

import DownloadComponent from '../components/DownloadComponent'
import ContactComponent from '../components/ContactComponent'
function HomeView() {
  return (
    <div>
        <img className='image' src={HeroSection} alt='background' />
    </div>
  )
}

export default HomeView