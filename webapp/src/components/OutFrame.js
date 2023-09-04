import React from 'react'
import OffCanvasNavComponent from '../components/OffCanvasNavComponent'
import FooterComponent from './FooterComponent'
import NavBarInner from './NavBarInner'


function OutFrame({children}) {
  return (
    <div className=' container-fluid m-0 p-0 ' > 
        <div className=' row col-12 p-0 mx-auto' >
            {true && <div style={{height:'100vh', position:'relative', left:'0', top:'0',backgroundColor:'rgb(237, 247, 253)'}} className=' text-dark border border-1 shadow-sm col-12 col-md-3 col-lg-3'>
                <OffCanvasNavComponent/>
            </div>}
            <div style={{height:'100vh'}} className=' p-0  col-12 col-md-9 col-lg-9 mx-auto  overflow-y-auto overflow-x-hidden'> 
              <NavBarInner />
              <div className='p-0 m-0 col-12 col-md-12 col-lg-12 mx-auto'>
                {children}
                <hr/>
              </div>
            
              <FooterComponent/>
            </div>
            
        </div>
    </div>
  )
}

export default OutFrame