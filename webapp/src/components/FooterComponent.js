import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/CSS/footerStyle.css'
import { faFacebook, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function FooterComponent() {
  return (
<div  className="myFooter" >
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
                <li><span style={{fontSize:'12px'}} >Privacy Policy</span></li>
                <li>Drivers License Test Application</li>
                <li>©2023 All rights reserved</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default FooterComponent