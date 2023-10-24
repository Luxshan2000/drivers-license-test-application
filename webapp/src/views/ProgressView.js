import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import '../assets/CSS/progressStyle.css';
import FrameComponent from '../components/FrameComponent';
import axios from 'axios';

const BarRechartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getMarks')
      .then(res => {
        // Process the data to get maximum marks for each quiz
        const processedData = processQuizData(res.data);
        setData(processedData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Function to process the quiz data and get maximum marks for each quiz
  const processQuizData = (quizData) => {
    // Create an object to store the maximum marks for each quiz
    const maxMarksByQuiz = {};

    // Loop through the quiz attempts and update max marks
    quizData.completed.forEach(attempt => {
      const quizNo = attempt.quizNo;
      const grade = attempt.grade;

      if (maxMarksByQuiz[quizNo] === undefined || grade > maxMarksByQuiz[quizNo]) {
        maxMarksByQuiz[quizNo] = grade;
      }
    });

    // Convert the max marks data into an array
    const processedData = Object.keys(maxMarksByQuiz).map(quizNo => ({
      quizNo: quizNo,
      grade: maxMarksByQuiz[quizNo],
    }));

    return processedData;
  };

  return (
    <FrameComponent>
      <div data-aos="fade-up" className="progress__background">
        <h5 style={{ padding: "4px 0 10px 10px", textAlign: "start", color: "black" }}>Quizzes Performance</h5>
        <BarChart width={570} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quizNo" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="grade" fill="#8884d8" />
        </BarChart>
      </div>
    </FrameComponent>
  );
};

export default BarRechartComponent;
