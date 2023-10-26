import React from 'react';
import { render } from '@testing-library/react';
import HeadingComponent from '../components/HeadingComponent';
import { MemoryRouter } from 'react-router-dom';


test('renders HeadingComponent without errors', () => {
  // Define a sample heading object to pass as a prop
  const heading = {
    _id: '1',
    no: 1,
    title: 'Sample Title',
    isCompleted: true, // You can adjust this as needed
    videoUrl: 'https://example.com', // You can adjust this as needed
  };

  // Render the HeadingComponent with the sample heading prop
  render(
        <MemoryRouter>
            <HeadingComponent heading={heading} />
        </MemoryRouter>
  );
});

test('renders HeadingComponent without errors with different props', () => {
  // Define a different sample heading object with different properties
  const heading = {
    _id: '2',
    no: 2,
    title: 'Random Title',
    isCompleted: false, 
    videoUrl: '', 
  };

  // Render the HeadingComponent with the different sample heading prop
  render(<MemoryRouter>
            <HeadingComponent heading={heading} />
        </MemoryRouter>);
});
