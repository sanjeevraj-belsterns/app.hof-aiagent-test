import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ElTypography } from './typography';

describe('Typography Component', () => {
  // Test rendering of content
  test('renders the correct content', () => {
    render(<ElTypography variant="h1" content="Hello World" />);

    // Check if the content is rendered correctly
    const typographyElement = screen.getByText(/hello world/i);
    expect(typographyElement).toBeInTheDocument();
  });

  // Test the variant prop
  test('applies the correct variant', () => {
    render(<ElTypography variant="h1" content="Hello World" />);

    // Check if the variant is correctly applied (e.g., `h1` variant should apply the correct styles)
    const typographyElement = screen.getByText(/hello world/i);
    expect(typographyElement).toHaveClass('MuiTypography-h1');
  });

  // Test the color prop
  test('applies the correct color', () => {
    render(<ElTypography variant="h1" color="red" content="Hello World" />);

    // Check if the color is applied correctly
    const typographyElement = screen.getByText(/hello world/i);
    expect(typographyElement).toHaveStyle('color: red');
  });

  // Test the fontWeight prop
  test('applies the correct font weight', () => {
    render(
      <ElTypography variant="h1" fontWeight="700" content="Hello World" />
    );

    // Check if the font weight is applied correctly
    const typographyElement = screen.getByText(/hello world/i);
    expect(typographyElement).toHaveStyle('font-weight: 700');
  });
});
