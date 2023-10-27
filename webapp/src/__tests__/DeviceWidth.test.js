import React from 'react';
import {  unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { DeviceWidthProvider, useDeviceWidth } from '../context/DeviceWidthContext';

let container = null;

beforeEach(() => {
  // Set up a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Clean up on exiting
  unmountComponentAtNode(container);
  container.remove();
});

// Mock window.innerWidth to control the window width
beforeAll(() => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    value: 800, // Set an initial width for the window
  });
});

describe('DeviceWidthContext', () => {
  it('provides the correct value for small screen', () => {
    const Component = () => {
        const isSmall = useDeviceWidth();
  
        return <div data-testid="isSmall">{isSmall.toString()}</div>;
      };
    act(() => {
      render(
        <DeviceWidthProvider>
          <Component />
        </DeviceWidthProvider>,
        container
      );
    });

   

    const isSmallElement = screen.getByTestId('isSmall');
    expect(isSmallElement.textContent).toBe('false');

    // Simulate a window resize to trigger the context update
    act(() => {
      window.innerWidth = 500; // Simulate a smaller screen width
      window.dispatchEvent(new Event('resize'));
    });

    // Check if the context value has updated after the resize
    expect(isSmallElement.textContent).toBe('true');
  });
});
