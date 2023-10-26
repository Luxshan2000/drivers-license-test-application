import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuestionComponent from '../components/QuestionComponent';

test('renders QuestionComponent with provided data', () => {
  const mcqData = {
    ques: "What does a circular road sign with a red border and a white center indicate?",
    options: ["Yield to oncoming traffic", "No entry", "Give way to pedestrians", "Speed limit ahead"],
  };

  const { getByText } = render(
    <QuestionComponent
      id="question1"
      no={0}
      mcq={mcqData}
      handleAnswerChange={() => {}}
    />
  );

  // Check if the question and answer choices are rendered
  expect(getByText("1) What does a circular road sign with a red border and a white center indicate?")).toBeInTheDocument();
  expect(getByText("Yield to oncoming traffic")).toBeInTheDocument();
  expect(getByText("No entry")).toBeInTheDocument();
  expect(getByText("Give way to pedestrians")).toBeInTheDocument();
  expect(getByText("Speed limit ahead")).toBeInTheDocument();
});
