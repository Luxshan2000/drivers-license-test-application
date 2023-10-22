import React, { useEffect } from 'react'

function PracticeQuizComponent({ id, mcq, handleAnswer, answers }) {
  // const mcq = {
  //   ques:"1. What does a circular road sign with a red border and a white center indicate?",
  //   ans:["Yield to oncoming traffic", "No entry","Give way to pedestrians","Speed limit ahead"]
  // }

  const handleOnChange = (answer) => {
    console.log(mcq._id)
    handleAnswer(mcq._id, answer)
  }
  return (
    <div className=' mb-3'>
      <h6 className=' p-0 m-0'>{mcq.question}</h6>
      {/* <h6 className=' p-0 m-0'>{mcq}</h6> */}
      <ul style={{ padding: '0', margin: '0', marginLeft: '5px' }}>
        {mcq.options.map((ans, index) => {
          const answerChecked = answers.hasOwnProperty(mcq._id) && answers[mcq._id] == ans
          return (
            <li style={{ listStyleType: 'none' }} key={index} >
              <input
                className="form-check-input me-2"
                type="radio"
                name={id}
                checked={answerChecked}
                id={index}
                onChange={() => {
                  console.log({ ans })
                  handleOnChange(ans)
                }} />
              <label className="form-check-label" htmlFor={id}>
                {ans}
              </label>
            </li>)
        })}
      </ul>
    </div>
  )
}

export default PracticeQuizComponent;