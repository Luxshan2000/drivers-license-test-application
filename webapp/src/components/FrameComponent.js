import React, { useState } from 'react'
import { useDeviceWidth } from '../context/DeviceWidthContext'
import FooterComponent from './FooterComponent'
import NavBarInner from './NavBarInner'
import OffCanvasNavComponent from './OffCanvasNavComponent'
import SideMenuComponent from './SideMenuComponent'

function FrameComponent({children}) {
    const isSmall = useDeviceWidth()
    const [collapsed, SetCollapsed] = useState((isSmall ? false : true))
    
    
    
    
   

  return (
    <div className={ !isSmall ? 'd-flex ': ''} >
        {(collapsed && isSmall) && <div className=' '>
            <NavBarInner SetCollapsed={SetCollapsed}/>
        </div>}
        <div className='   shadow-sm border  m-0  border-1  ps-5 pe-5' style={{position:'sticky', top:'0', height:'100%'}} >
            {collapsed && <OffCanvasNavComponent/>}
        </div>
            <div className={`flex-fill ${(isSmall && collapsed)? 'visually-hidden' :''}`}>
                <div className=' m-0 p-0 sticky-top '>
                    <NavBarInner SetCollapsed={SetCollapsed}/>
                </div>
                <div className='p-0 m-0 col-12 col-md-12 col-lg-12 mx-auto'>
                    {children}
                    <hr/>
                </div>
                <FooterComponent/>
            </div>
        </div>
  )
}

export default FrameComponent