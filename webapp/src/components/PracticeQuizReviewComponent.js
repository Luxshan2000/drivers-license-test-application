import React, { useEffect } from 'react'

function ReviewComponent({ id, mcq }) {

  return (
    <div className=' mb-3'>
      <h6 className=' p-0 m-0'>{mcq.question}</h6>
      <ul style={{ padding: '0', margin: '0', marginLeft: '5px' }}>
        {mcq.options.map((ans, index) => {
        const answerChecked = ans == mcq.userAnswer
          return (
            <li style={{ listStyleType: 'none' }} key={index} >
              <input
                className="form-check-input me-2"
                type="radio"
                value={mcq.userAnswer}
                checked = {answerChecked}
                disabled
                />
              <label className="form-check-label" htmlFor={id}>
                {ans}
              </label>
            </li>)
        })}
      </ul>
      <p style={{fontSize : 12 , color : mcq.color}}>{mcq.feedback}</p>
    </div>
  )
}

export default ReviewComponent;