import React from 'react'
import HeadingComponent from '../components/HeadingComponent'

function CourseView() {
  const heading = [
    {
      id:"1",
      name: "1. Overview",
      status:"Completed!",
      availability:"Free",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
    },
    {
      id:"2",
      name: "2. Who can apply for driving license?",
      status:"Completed!",
      availability:"Free",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
    },
    {
      id:"3",
      name: "3. What are the ways to apply License?",  
      status:"Completed!",
      availability:"Free",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
    },
    {
      id:"4",
      name: "4. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
    },
    {
      
      id:"5",
      name: "5. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
      
    },
    {
      
      id:"6",
      name: "6. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
      
    },
    {
      
      id:"7",
      name: "7. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
      
    },
    {
      
      id:"8",
      name: "8. Sample heading",  
      status:"Process!",
      availability:"Premium",
      video:"URL Video",
      quiz:"QuizId",
      subHeadings:["1.1 Interactive Video", "1.2 Quiz"]
      
    }]

  return (
    <div className=' container-fluid   p-5'>
      {heading.map((item) =><HeadingComponent heading={item} /> )}
    </div>
  )
}

export default CourseView