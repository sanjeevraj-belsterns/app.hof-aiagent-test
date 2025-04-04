import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ElTextfields } from './textfield';

describe('EleTextfields Component', () => {
  test('renders with correct props', () => {
    render(
      <ElTextfields
        name="testName"
        type="text"
        size="small"
        placeholder="Enter text"
        variant="outlined"
      />
    );

    // Find the input element by its placeholder text
    const inputElement = screen.getByPlaceholderText('Enter text');

    // Assert that the input element is in the document
    expect(inputElement).toBeInTheDocument();

    // Assert that the input element has the correct attributes
    expect(inputElement).toHaveAttribute('name', 'testName');
    expect(inputElement).toHaveAttribute('type', 'text');

    // Assert that the input element has the correct CSS class
    expect(inputElement).toHaveClass('MuiOutlinedInput-input');
  });

  test('applies additional props', () => {
    render(
      <ElTextfields
        name="testName"
        type="text"
        size="small"
        placeholder="Enter text"
        variant="outlined"
        label="Enter your text"
      />
    );

    // Find the input element by its label text
    const inputElement = screen.getByLabelText('Enter your text');

    // Assert that the input element is in the document
    expect(inputElement).toBeInTheDocument();
  });
});
