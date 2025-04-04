import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ElButton } from './button';

describe('EleButton Component', () => {
  test('renders the button with content', () => {
    render(
      <ElButton
        name="test-button"
        variant="contained"
        content="Click Me"
        disabledCondition={false}
        isLoading={false}
      />
    );

    // Check if the button is rendered with the correct text
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  test('disables the button when disabledCondition is true', () => {
    render(
      <ElButton
        name="test-button"
        variant="contained"
        content="Click Me"
        disabledCondition={true}
        isLoading={false}
      />
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDisabled();
  });

  test('shows loading when isLoading is true', () => {
    render(
      <ElButton
        name="test-button"
        variant="contained"
        content="Click Me"
        disabledCondition={false}
        isLoading={true}
      />
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('applies correct styles when disabled', () => {
    render(
      <ElButton
        name="test-button"
        variant="contained"
        content="Click Me"
        disabledCondition={true}
        isLoading={false}
      />
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveStyle('background-color:rgba(0, 0, 0, 0.12)');
  });

  test('applies correct styles when enabled', () => {
    render(
      <ElButton
        name="test-button"
        variant="contained"
        content="Click Me"
        disabledCondition={false}
        isLoading={false}
      />
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveStyle('background-color: lime');
  });
});
