import React from 'react';
import {  unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModalProvider, useModal } from '../context/ModalContext';

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

describe('ModalContext', () => {
  it('provides default modal values', () => {

    const Component = () => {
        const { modal } = useModal();
  
        return (
          <div data-testid="modalValues">
            <div data-testid="heading">{modal.heading}</div>
            <div data-testid="show">{modal.show.toString()}</div>
          </div>
        );
      };



    act(() => {
      render(
        <ModalProvider>
          <Component />
        </ModalProvider>,
        container
      );
    });

    

    const modalValues = screen.getByTestId('modalValues');
    const headingElement = screen.getByTestId('heading');
    const showElement = screen.getByTestId('show');

    expect(modalValues).toBeInTheDocument();
    expect(headingElement.textContent).toBe('');
    expect(showElement.textContent).toBe('false');
  });

  it('can open and close the modal', () => {

    const Component = () => {
        const { modal, showModal, closeModal } = useModal();
  
        return (
          <div data-testid="modalValues">
            <div data-testid="show">{modal.show.toString()}</div>
            <button data-testid="showModal" onClick={showModal}>Show Modal</button>
            <button data-testid="closeModal" onClick={closeModal}>Close Modal</button>
          </div>
        );
      };



    act(() => {
      render(
        <ModalProvider>
          <Component />
        </ModalProvider>,
        container
      );
    });

    

    const showElement = screen.getByTestId('show');
    const showModalButton = screen.getByTestId('showModal');
    const closeModalButton = screen.getByTestId('closeModal');

    expect(showElement.textContent).toBe('false');

    // Click the "Show Modal" button to open the modal
    fireEvent.click(showModalButton);
    expect(showElement.textContent).toBe('true');

    // Click the "Close Modal" button to close the modal
    fireEvent.click(closeModalButton);
    expect(showElement.textContent).toBe('false');
  });
});
