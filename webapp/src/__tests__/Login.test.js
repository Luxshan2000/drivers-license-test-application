import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../components/Login';
import { MemoryRouter } from 'react-router-dom';


// Test case for rendering the component without errors
test('renders Login component without errors', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const emailInput = screen.getByLabelText('Email address');
  const passwordInput = screen.getByLabelText('Password');
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

// Test case for email validation
test('email validation works correctly', () => {
  render(<MemoryRouter>
          <Login />
        </MemoryRouter>);
  const emailInput = screen.getByLabelText('Email address');
  const passwordInput = screen.getByLabelText('Password');

  // Provide a valid email and password
  fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Ensure that the email is valid
  expect(emailInput).toBeValid();
  expect(passwordInput).toBeValid();

  // Provide an invalid email (no @ symbol)
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

  // Ensure that the email is invalid
  expect(emailInput).not.toBeValid();

  // Provide an empty password
  fireEvent.change(passwordInput, { target: { value: '' } });

  // Ensure that the password is invalid
  expect(passwordInput).not.toBeValid();


  // Provide an empty email
  fireEvent.change(emailInput, { target: { value: '' } });

  // Ensure that the email is invalid
  expect(emailInput).not.toBeValid();
});

// You can add more test cases for different scenarios as needed
