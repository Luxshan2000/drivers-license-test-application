import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import '../assets/CSS/progressStyle.css';
import FrameComponent from '../components/FrameComponent'

const BarRechartComponent = () => {
  const data = [
    {
      name: "Quiz 1",
      value: 100,
      time: '10 min'
    },
    {
      name: "Quiz 2",
      value: 0,
      time: '10 min'
    },
    {
      name: "Quiz 3",
      value: 0,
      time: '10 min'
    },
    {
      name: "Quiz 4",
      value: 0,
      time: '10 min'
    },
    {
      name: "Quiz 5",
      value: 0,
      time: '10 min'
    },
    {
      name: "Quiz 6",
      value: 0,
      time: '10 min'
    }
  ];

  return (
    <FrameComponent>
      <div data-aos="fade-up" className="progress__background">
        <h5 style={{ padding: "4px 0 10px 10px", textAlign: "start", color: "black" }}>Quizzes Performance</h5>
        <BarChart width={570} height={400} data={data} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </FrameComponent>
    
  );
};

export default BarRechartComponent;
