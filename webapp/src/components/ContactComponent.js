import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/CSS/contactStyle.css'

import AppStore from '../assets/images/appstore.svg'
import PlayStore from '../assets/images/googleplaystore.svg'

function ContactComponent() {
  return (
    <div className='my-contact container-fluid' >
        <div className='row'>
            <div className='col-8 text-center'>
                <h6 className=' text-center'>Contact Us</h6>
                <div className=' row'>
                </div>
            </div>
            <div className='col-4 '>
                <h6 className='text-center'>Download App</h6>
                <div className='row flex-row  justify-content-around'>
                    <img className=' flex-grow-1 col-2'  src={AppStore} height={40} alt='AppStore' />
                    <img  className=' flex-grow-1 col-2' height={40}  src={PlayStore}  alt='GooglePlayStore' />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ContactComponent