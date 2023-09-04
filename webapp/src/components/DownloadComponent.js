import React from 'react'
import GooglePlayStore from '../assets/images/googleplaystore.svg'
import AppStore from '../assets/images/appstore.svg'
import DownloadSection from '../assets/images/DownloadSection.jpeg'
import Button from 'react-bootstrap/Button';
function DownloadComponent() {
    return (
        <div className='container-fluid'>

            <div  style={{width:'100%',height:'60%',padding : 100,alignItems:"center"}} className='row'>
                <div  className='col-12 col-md-6 col-lg-5'>
                    <img
                        className='rounded float start'
                        src={DownloadSection}
                        alt='Download Section Picture'
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>


                <div  className='col-12 col-md-6 col-lg-5'>
                    <div className='justfiy-content-start'>
                        <h1 className=' text-start' style={{fontWeight:'bold'}}>Download Mobile App</h1>
                        <p className=' text-start'>{`Enhance your driving test preparation on the go with our convenient mobile app. Download our app to access a wide range of practice tests for your driver's license exam right from your smartphone or tablet. Whether you're waiting in line, commuting, or simply have a few minutes to spare, our mobile app lets you practice and improve your knowledge anytime, anywhere.
                         Get ready to ace your driving test with ease and confidence – simply download the app and start practicing today!`}</p>
                    </div>

                    <div  className='justfiy-content-start row align-items-center'>

                    <Button  className="col-auto m-3 p-1" style={{backgroundColor:'#B5E3EA',border:'none'}}>
                    <div className=' row ' >
                                <div className='col-3 align-self-center'>
                                    <img height={50} src={GooglePlayStore} alt='Google Play Store Icon' />
                                </div>
                                <div className=' col-9'>
                                    <h6 style={{ margin: 0, padding: 0, textAlign: 'left',color:'black' }}>GET IT ON</h6>
                                    <h4 style={{ margin: 0, padding: 0, textAlign: 'left',color:'black' }}>Google Play</h4>
                                </div>
                            </div>
                    </Button>
                    <Button  className="col-auto m-3 p-1" style={{backgroundColor:'#B5E3EA',border:'none'}}>
                    <div className=' row' >
                                <div className='col-3 align-self-center '>
                                    <img height={50} src={AppStore} alt='Google Play Store Icon' />
                                </div>
                                <div className=' col-9'>
                                    <h6 style={{ margin: 0, padding: 0, textAlign: 'left' ,color:'black'}} >Download on the</h6>
                                    <h4 style={{ margin: 0, padding: 0, textAlign: 'left',color:'black' }}>App Store</h4>
                                </div>
                            </div>
                    </Button>

                        
                    </div>


                </div>
            </div>

        </div>
    )
}

export default DownloadComponent