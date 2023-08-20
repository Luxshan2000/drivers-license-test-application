import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/CSS/contactStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'




function ContactComponent() {
  return (
    <div style={{backgroundColor:'#361f10', color:'#dcdace'}} className=' container-fluid'>
        <h3 className=' text-center'>Contact Info</h3>
        <p className=' text-center col-md-9 col-sm-10 col-lg-6 col m-auto' >Reach out to us for all your needs. Whether 
            you're a driving school looking to join us or a 
            customer with questions, we're here to support you every 
            step of the way.
        </p>
        <div className=' justify-content-center row '>
            <div className='card  shadow col-auto m-3 p-2'>  
                <FontAwesomeIcon size='3x' icon={faLocationDot} />
                <h6 style={{margin:0, padding:0, textAlign:'left'}}>Bandaranayake Mawatha,<br/> Moratuwa 10400</h6>
            </div>
            <div className='card  shadow col-auto m-3 p-2'>  
                <FontAwesomeIcon size='3x' icon={faEnvelope} />
                <h6 style={{margin:0, padding:0, textAlign:'left'}}>sldriver@gmail.com</h6>
            </div>
            <div className='card  shadow col-auto m-3 p-2'>  
                <FontAwesomeIcon size='3x' icon={faPhone} />
                <h6 style={{margin:0, padding:0, textAlign:'left'}}>Mobile: 077-1234567<br/> Telephone: 011-1234567 </h6>
            </div>

           

            
        </div>
    </div>
  )
}

export default ContactComponent