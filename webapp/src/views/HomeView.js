import React from 'react'

import DownloadComponent from '../components/DownloadComponent'
import ContactComponent from '../components/ContactComponent'
function HomeView() {
  return (
    <>
      <div style={{minHeight:'100vh', backgroundColor:'blue', marginBottom:'0', paddingBottom:'0', border:'2px, black, sloid'}}>
        <h1>Home view</h1>
      </div>
      <ContactComponent />
      <DownloadComponent />
    </>
    
  )
}

export default HomeView