import SampleVideo from '../assets/video/sample.mp4'
import {  useState, useEffect, useRef } from 'react'
import "../assets/CSS/videoStyle.css"

function VideoComponent() {
  const [showControls, setShowControls] = useState(true);
  const [isPlaying, setIsplaying] = useState(false);
  const fullScreenRef = useRef(null)
  const videoRef = useRef(null)

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


  const enterFullScreen = ()=>{
    const fullScreenElement = fullScreenRef.current

    if (fullScreenElement.requestFullscreen) {
      fullScreenElement.requestFullscreen();
    } else if (fullScreenElement.mozRequestFullScreen) {
      fullScreenElement.mozRequestFullScreen();
    } else if (fullScreenElement.webkitRequestFullscreen) {
      fullScreenElement.webkitRequestFullscreen();
    } else if (fullScreenElement.msRequestFullscreen) {
      fullScreenElement.msRequestFullscreen();
    }

  }

  const playVideo =()=>{
    const videoElement = videoRef.current
    if(videoElement.paused){
      videoElement.play()
      setIsplaying(true)
    }else{
      videoElement.pause()
      setIsplaying(false)
    }
  }

  
  return (
    <div className='contanier'>
      <div
        ref={fullScreenRef}
        onTouchStart={handleTouch}
        onTouchEnd={handleTouch}
        onMouseEnter ={handleTouch}
        onClick={handleTouch}
        style={{position:'relative'}} 
        className=' user-select-none fullscreen-div m-auto col-12 col-md-10 col-lg-10 '>
        <video 
          ref={videoRef}
          className='w-100  rounded-3 p-0 m-0'  
          src={SampleVideo}  
          autoPlay />
        { showControls &&
        <div style={{position:"absolute", bottom:'3px',left:'0',width:'100%'}}  className='align-items-center w-100 pt-0 pb-0 m-0  rounded-bottom-3 d-flex flex-row    text-white'>
          {!isPlaying ? <div className="p-lg-3 p-2  text-start flex-shrink-1">
            <i onClick={playVideo} class="bi bi-play-fill"></i>
          </div>:
          <div  className="p-lg-3 p-2  text-start flex-shrink-1">
            <i onClick={playVideo} class="bi bi-pause-fill"></i>
          </div>}
          <div className="p-lg-3 p-2  text-start flex-shrink-1">
            <i class="bi bi-arrow-counterclockwise"></i>
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
          <div className="p-lg-3 p-2  flex-shrink-1">
            <i class="bi bi-speedometer2"></i>
          </div>
          <div className="p-lg-3 p-2  flex-shrink-1">
            <i class="bi bi-volume-down-fill"></i>
          </div>
          <div className="p-lg-3 p-2  flex-shrink-1"> 
            <i onClick={enterFullScreen} class="bi bi-arrows-angle-expand"></i>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default VideoComponent