import SampleVideo from '../assets/video/sample.mp4'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import {  useState, useEffect } from 'react'


function VideoComponent() {
  const [showControls, setShowControls] = useState(true);

  const handleTouch = ()=>{
    setShowControls((prv)=> prv ? prv : !prv) 
  }

  useEffect(() => {
    let hideControlsTimeout;

    if (showControls) {
      hideControlsTimeout = setTimeout(() => {
        setShowControls(false);
      }, 5000); // Hide controls after 3 seconds of inactivity
    }

    return () => {
      clearTimeout(hideControlsTimeout);
    };
  }, [showControls]);

 


  return (
    <div
      onTouchStart={handleTouch}
      onTouchEnd={handleTouch}
      onMouseEnter ={handleTouch}
      onClick={handleTouch}
     style={{position:'relative'}} className=' p-0 container col-12 col-lg-10  user-select-none'>
      <div style={{borderRadius:"10px"}}  className=' row  '>
        <video style={{borderRadius:"10px"}}  muted  width={500} src={SampleVideo}  autoPlay />
      </div> 
      {showControls && <div style={{position:"absolute", bottom:'0',left:'0',width:'100%'}}  className='align-items-center pt-0 pb-0  rounded-bottom-3 d-flex flex-row bg-transparent text-white'>
        <div className="p-lg-3 p-2  text-start flex-shrink-1">
          Play
        </div>
        <div style={{display:"none"}} className="p-3  text-start flex-shrink-1">
          Pause
        </div>
        <div className="p-lg-3 p-2  text-start flex-shrink-1">
          ClockRotateLeft
        </div>
        <div className="p-lg-3 p-2 flex-grow-1  flex-shrink-1">
          <div style={{height:'6px'}} className="progress-stacked ">
            <div className="progress" role="progressbar" ariaLabel="Segment one" ariaValuenow="40" ariaValuemin="0" ariaValuemax="100" style={{width: "40%"}}>
              <div className="progress-bar bg-info"></div>
            </div>

            <div className="progress" role="progressbar" ariaLabel="Segment one" ariaValuenow="0.5" ariaValuemin="0" ariaValuemax="100" style={{width: "0.5%"}}>
              <div className="progress-bar"></div>
            </div>

            <div className="progress" role="progressbar" ariaLabel="Segment one" ariaValuenow="10" ariaValuemin="0" ariaValuemax="100" style={{width: "10%"}}>
              <div className="progress-bar bg-info"></div>
            </div>
          </div>
        </div>
        <div className='p-lg-3 p-2 text-start  flex-shrink-1'>
            Flag
        </div>
        <div className="p-lg-3 p-2  flex-shrink-1">
          Speed
        </div>
        <div className="p-lg-3 p-2  flex-shrink-1">
          Volume
        </div>
        <div className="p-lg-3 p-2  flex-shrink-1"> 
          Expand
        </div>
      </div>}
    </div>
  )
}

export default VideoComponent