import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignIn from './page';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAlertManager } from '../../../hooks/useAlertManager';
import { StaticMessages } from '@/app/frontend/constants/app';

// Mock next-auth/react, next/navigation, and useAlertManager
jest.mock('next-auth/react', () => ({
  signIn: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('../../../hooks/useAlertManager', () => ({
  useAlertManager: jest.fn()
}));

describe('SignIn component', () => {
  const mockPush = jest.fn();
  const mockShowAlert = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useAlertManager as jest.Mock).mockReturnValue(mockShowAlert);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the login form', () => {
    render(<SignIn />);
    const form = screen.getByTestId('sign-in-form');
    expect(form).toBeInTheDocument();
  });

  it('submits form and handles successful sign-in', async () => {
    (signIn as jest.Mock).mockResolvedValue({
      error: null
    });
    render(<SignIn />);

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText('Enter a email'), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Enter a password'), {
      target: { value: 'Password@123' }
    });
    const signInButton = screen.getByRole('button', { name: 'Sign in' });

    // Submit the form
    fireEvent.click(signInButton);

    // Wait for async operations to resolve
    await waitFor(() =>
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'test@example.com',
        password: 'Password@123',
        redirect: false
      })
    );

    // Ensure successful redirect after sign-in
    await waitFor(() => expect(mockPush).toHaveBeenCalledWith('/home'));
  });

  it('shows alert on error', async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({
      error: 'Invalid Credentials'
    });

    render(<SignIn />);

    fireEvent.change(screen.getByPlaceholderText('Enter a email'), {
      target: { value: 'test1234@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Enter a password'), {
      target: { value: 'Password@123' }
    });
    const signInButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.click(signInButton);

    // Wait for the async alert to be called
    await waitFor(() => {
      expect(mockShowAlert).toHaveBeenCalledWith('Invalid Credentials', true);
    });
  });

  it('shows unexpected error message on catch', async () => {
    (signIn as jest.Mock).mockImplementationOnce(() => {
      throw new Error();
    });

    render(<SignIn />);

    fireEvent.change(screen.getByPlaceholderText('Enter a email'), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Enter a password'), {
      target: { value: 'Password@123' }
    });
    const signInButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.click(signInButton);

    expect(mockShowAlert).toHaveBeenCalledWith(
      StaticMessages.UnExpectedErrorMessage,
      true
    );
  });
});
