import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ElLink } from './link';

// Mock the next/link component to behave like a simple <a> tag for testing purposes
jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

describe('EleLink Component', () => {
  test('renders the correct content', () => {
    render(<ElLink href="/test" content="Click Here" />);

    // Check if the text content is rendered correctly
    const linkElement = screen.getByText(/click here/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('applies the correct href', () => {
    render(<ElLink href="/test" content="Click Here" />);

    // Check if the correct href attribute is applied
    const linkElement = screen.getByRole('link', { name: /click here/i });
    expect(linkElement).toHaveAttribute('href', '/test');
  });
});
