import React from 'react'
import '../assets/CSS/footerStyle.css'



function FooterComponent() {
  return (
<div  className="myFooter" >
    <div className='myFooter-top FooterTextTop' >
        <div className='myFooter-contact'>
            <ul className='myFooter-element'>
                <li><h6 className='myFooter-heading'>Contact details</h6></li>
                <li>Phone: 0771234567</li>
                <li>Email: abc@gmail.com</li>
                <li>Address: No 10, Moratuwa,UOM, SL</li>
            </ul>
        </div>
        <div className='myFooter-download '>
            <ul className='myFooter-element'>
                <li><h6 className='myFooter-heading'>Download App</h6></li>
                <li>
                    <i class="bi bi-apple"></i> AppStore
                </li>
                <li>
                    <i class="bi bi-google-play"></i> GooglePlay
                </li>
                
            </ul>
        </div>
        <div className='myFooter-privacy'>
            <ul className='myFooter-element'>
                <li><h6 className='myFooter-heading'>Safeguarding and Assuarance</h6></li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security & Trust</li>
            </ul>
        </div>
    </div>
    <div className='footer-hl'><span></span></div>
    <div className='footer-bottom FooterTextBottom' >
        <div className='footer-social'>
            <ul className=' myFooter-element'>
                <li><i style={{fontSize:"2em"}} class="bi bi-facebook"></i></li>
                <li><i style={{fontSize:"2em"}} class="bi bi-twitter"></i></li>
                <li><i style={{fontSize:"2em"}} class="bi bi-whatsapp"></i></li>
                <li><i style={{fontSize:"2em"}} class="bi bi-linkedin"></i></li>
            </ul>
        </div>
        <div className='footer-end'>
            <ul>
                <li className=' myFooter-element'>DriveSmart</li>
                <li className=' myFooter-element'>©2023 All rights reserved</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default FooterComponent