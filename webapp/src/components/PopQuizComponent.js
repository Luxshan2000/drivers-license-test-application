import React from 'react'



function PopQuizComponent() {
  return (
    <div style={{position:'absolute', bottom:"0"}} className=' p-md-5 p-lg-5 h-100  p-3 col-12'>
       <div  className=' d-flex flex-column p-2  text-start rounded-3  bg-success overflow-hidden p-0 container col-9 h-100  user-select-none'>
        <h6 className="flex-grow-0 p-1" >Question</h6>
        <hr/>
        <div className='p-2 flex-grow-1'>
            <h6>This is a pop quiz?</h6>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    First Option
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    Second Option
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    Third Option
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    Fourth Option
                </label>
            </div>
        </div>
        <hr/>
        <div className='p-2 flex-grow-0'  >
            <div className=' d-flex flex-row justify-content-end' >
              <button type="button" class="btn btn-primary ps-5 pe-5">Check</button>
            </div>
        </div>
        </div> 
    </div>
    
  )
}

export default PopQuizComponent