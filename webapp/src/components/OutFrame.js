import React from 'react'
import OffCanvasNavComponent from '../components/OffCanvasNavComponent'
import FooterComponent from './FooterComponent'



function OutFrame({children}) {
  return (
    <div className='container-fluid m-0 p-0 ' > 
        <div className=' row col-12 mx-auto' >
            <div style={{height:'100vh', position:'relative', left:'0', top:'0',backgroundColor:'#3B474F'}} className='col-12 col-md-3 col-lg-3'>
                <OffCanvasNavComponent/>
            </div>
            <div style={{height:'100vh'}} className=' p-0  col-12 col-md-7 col-lg-9  overflow-y-auto overflow-x-hidden'> 
            {children}
            <div >
            <FooterComponent/>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default OutFrame