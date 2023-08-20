import React from 'react'
import GooglePlayStore from '../assets/images/googleplaystore.svg'
import AppStore from '../assets/images/appstore.svg'
function DownloadComponent() {
  return (
    <div style={{backgroundColor:'#361f10', color:'#dcdace'}} className=' container-fluid'>
        <h3 className=' text-center'>Download Mobile App</h3>
        <p>A mobile version of our app is now available for you!</p>
        <div className=' justify-content-center row '>
            <div className='card  shadow col-auto m-3 p-1'>
                <div className=' row ' >
                    <div  className='col-3 align-self-center'>
                        <img height={50} src={GooglePlayStore} alt='Google Play Store Icon' />
                    </div>
                    <div className=' col-9'>
                        <h6 style={{margin:0, padding:0, textAlign:'left'}}>GET IT ON</h6>
                        <h4 style={{margin:0, padding:0, textAlign:'left'}}>Google Play</h4>
                    </div>
                </div>
            </div>

            <div className='card bg-white shadow col-auto m-3 p-1'>
                <div className=' row' >
                    <div  className='col-3 align-self-center '>
                        <img  height={50} src={AppStore} alt='Google Play Store Icon' />
                    </div>
                    <div className=' col-9'>
                        <h6 style={{margin:0, padding:0, textAlign:'left'}} >Download on the</h6>
                        <h4 style={{margin:0, padding:0, textAlign:'left'}}>App Store</h4>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default DownloadComponent