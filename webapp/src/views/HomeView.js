import React from 'react'
// import HomePageCArpic from '../assets/HomePageCarpic.svg'

import  Carousal  from '../components/Carousal'
import DownloadComponent from '../components/DownloadComponent'
import About from '../components/AboutUsComponent'
import HeroSection from '../components/HeroSectionComponent'
import NavBarComponent from  '../components/NarbarComponent'

function HomeView() {
  return (
    <>
    <NavBarComponent />
      <div>
          <HeroSection/>
          <Carousal/>
          <div id='#aboutus'>
            <About/>
          </div>
          <DownloadComponent/>
      </div>
    </>
  )
}

export default HomeView