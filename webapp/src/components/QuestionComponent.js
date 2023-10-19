import React from 'react'

function QuestionComponent({id , no, mcq, handleAnswerChange}) {
  // const mcq = {
  //   ques:"1. What does a circular road sign with a red border and a white center indicate?",
  //   ans:["Yield to oncoming traffic", "No entry","Give way to pedestrians","Speed limit ahead"]
  // }
  return (
    <div className=' mb-3'>
      <h6 className=' p-0 m-0'>{no+1+") "+mcq.ques}</h6>
      {/* <h6 className=' p-0 m-0'>{mcq}</h6> */}
      <ul style={{padding:'0',margin:'0',marginLeft:'5px'}}>
        {mcq.options.map((ans,index) => 
        <li key={index} style={{listStyleType:'none'}} >
          <label className="form-check-label" htmlFor={id}>
            <input 
              className="form-check-input me-2" 
              type="radio" 
              value={ans}
              name={id}
              onChange={handleAnswerChange} 
              id={id}/>
            {ans}
          </label>
        </li>)}
      </ul>
    </div>
  )
}

export default QuestionComponent