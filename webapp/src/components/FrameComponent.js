import React, { useEffect, useState } from 'react'
import { useDeviceWidth } from '../context/DeviceWidthContext'
import FooterComponent from './FooterComponent'
import NavBarInner from './NavBarInner'
import OffCanvasNavComponent from './OffCanvasNavComponent'


function FrameComponent({children}) {
    const isSmall = useDeviceWidth()
    const [collapsed, SetCollapsed] = useState((isSmall ? false : true))
    
    useEffect(()=>{
        SetCollapsed((isSmall ? false : true))
    },[isSmall])
    
    
   

  return (
    <div  className={ !isSmall ? 'd-flex mt-0 ': 'mt-0'} >
        {(collapsed && isSmall) && <div  className='m-0 p-0 sticky-top'>
            <NavBarInner  SetCollapsed={SetCollapsed}/>
        </div>}
         <div className={` ${ collapsed ? 'px-5' : 'px-0'} shadow-sm border  m-0  border-1  `} style={{position:'sticky', top:'0', height:`${ isSmall? '0' :'100vh'}`}} >
            <OffCanvasNavComponent collapsed={collapsed}/>
        </div>
            <div className={`flex-fill  ${(isSmall && collapsed)? 'visually-hidden' :''}`}>
                <div  className=' m-0 p-0 sticky-top '>
                    <NavBarInner SetCollapsed={SetCollapsed}/>
                </div>
                <div className=' px-1 px-md-2 px-lg-5 m-0 '>
                    {children}
                </div>
                 <hr/>
                <FooterComponent/>
            </div>
        </div>
  )
}

export default FrameComponent