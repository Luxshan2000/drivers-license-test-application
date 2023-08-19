import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/CSS/footerStyle.css'
import { faFacebook, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterComponent() {
  return (
<div  style={{backgroundColor:'blue'}} className="myFooter" >
    <div className='footer-top' >
        <div className='footer-contact' >
            <h3>Contact Details</h3>
            <ul>
                <li>Phone No: 077-1234567</li>
                <li>Address: UOM ,Kadupatti, Moratuwa, Sri Lanka</li>
                <li>Email: SLDriverTest@gmail.com</li>
            </ul>
        </div>
        <div className='footer-links'>
            <h3>Our Links</h3>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Sign Up</li>
                <li>Log in</li>
            </ul>
        </div>
        <div className='footer-download'>
            <h3>Download Links</h3>
            <ul>
                <li>AppStore</li>
                <li>PlayStore</li>
            </ul>
        </div>
        <div className='footer-safe'>
            <h3>Safeguarding and Assurance</h3>
            <ul>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security & Trust</li>
            </ul>
        </div>
    </div>
    <div className='footer-hl'><span></span></div>
    <div className='footer-bottom' >
        <div className='footer-social'>
            <ul>
                <li><FontAwesomeIcon size='2x' icon={faFacebook}/></li>
                <li><FontAwesomeIcon size='2x' icon={faTwitter}/></li>
                <li><FontAwesomeIcon size='2x' icon={faWhatsapp}/></li>
                <li><FontAwesomeIcon size='2x' icon={faLinkedinIn}/></li>
            </ul>
        </div>
        <div className='footer-end'>
            <ul>
                <li>Drivers License Test Application</li>
                <li>©2023 All rights reserved.</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default FooterComponent