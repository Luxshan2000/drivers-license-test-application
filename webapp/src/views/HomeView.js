import React from 'react'
// import HomePageCArpic from '../assets/HomePageCarpic.svg'

import  Carousal  from '../components/Carousal'
import DownloadComponent from '../components/DownloadComponent'
import ContactComponent from '../components/ContactComponent'
import About from '../components/AboutUsComponent'
import HeroSection from '../components/HeroSectionComponent'

function HomeView() {
  return (
    <div>
        <HeroSection/>
        <Carousal/>
        <About/>
        <DownloadComponent/>
        
    </div>
  )
}

export default HomeView