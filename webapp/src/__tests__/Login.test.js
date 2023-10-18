import { render, screen } from '@testing-library/react';
import Todo from '../Todo';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
        <Todo />
    </MemoryRouter>
  );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});
