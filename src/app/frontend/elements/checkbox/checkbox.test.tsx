import { render, screen } from '@testing-library/react';
import { ElCheckbox } from './checkbox';
import '@testing-library/jest-dom'; // For additional matchers

describe('EleCheckbox component', () => {
  test('renders checkbox', () => {
    render(<ElCheckbox name="test_checkbox" color="green" fontSize="12px" />);

    // Find the checkbox element by its data-testid
    const checkboxElement = screen.getByTestId('ele-checkbox');

    // Check if the checkbox is in the document
    expect(checkboxElement).toBeInTheDocument();
  });

  test('applies correct color to checkbox', () => {
    render(<ElCheckbox name="test_checkbox" color="green" fontSize="12px" />);

    // Find the checkbox element by its data-testid
    const checkboxElement = screen.getByTestId('ele-checkbox');

    // Check if the checkbox has the correct color style
    expect(checkboxElement).toHaveStyle('color: green');
  });

  test('applies correct font size to checkbox', () => {
    render(<ElCheckbox name="test_checkbox" color="green" fontSize="1.5rem" />);

    // Find the checkbox element by its data-testid
    const checkboxElement = screen.getByTestId('ele-checkbox');

    // Find the SVG element inside the checkbox
    const svgIcon = checkboxElement.querySelector('svg');

    // Check if the SVG icon has the correct font size
    expect(svgIcon).toHaveStyle('font-size: 1.5rem');
  });
});
