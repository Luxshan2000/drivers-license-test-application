import React from 'react'

function QuestionComponent() {
  const mcq = {
    ques:"1. What does a circular road sign with a red border and a white center indicate?",
    ans:["Yield to oncoming traffic", "No entry","Give way to pedestrians","Speed limit ahead"]
  }
  return (
    <div>
      <h6>{mcq.ques}</h6>
      <ul>
        {mcq.ans.map((ans) => <li>{ans}</li>)}
      </ul>
    </div>
  )
}

export default QuestionComponent