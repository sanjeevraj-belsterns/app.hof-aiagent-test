'use client';

import React from 'react';
import { useState } from 'react';
import { Grid2, Paper } from '@mui/material';
import { ElButton } from '@/app/frontend/elements/button/button';
import { ElTypography } from '@/app/frontend/elements/typography/typography';
import { ElTextfields } from '@/app/frontend/elements/textfield/textfield';
import { ElLink } from '@/app/frontend/elements/link/link';
import { ElCheckbox } from '@/app/frontend/elements/checkbox/checkbox';
import {
  FormattedName,
  validateEmail,
  validatePassword
} from '@/app/frontend/utils/helpers';
import { SubmitData } from '../../pages/(auth)/sign-in/page';
import { signIn } from 'next-auth/react';

interface Login {
  handleSubmit: (data: SubmitData) => void; // Pass data directly
}

export default function LogIn({ handleSubmit }: Login) {
  const [signInData, setSignInData] = useState({
    Email: '',
    Password: ''
  });
  const [validationStatus, setValidationStatus] = useState({
    email: false,
    password: false
  });

  const [errors, setErrors] = useState({
    Email: '',
    Password: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    maxLength: number
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    let error = '';
    const formattedName = FormattedName(name); // Format the input field name for display in error messages
    const truncatedValue = value.slice(0, maxLength); // Truncate the input value to the maxLength
    error =
      value.length > maxLength
        ? `${formattedName} must be ${maxLength} characters or less`
        : ''; // Set an error message if the value exceeds maxLength
    setSignInData({ ...signInData, [name]: truncatedValue });
    setValidationStatus(prev => ({
      ...prev,
      [name.toLowerCase()]:
        name === 'Email'
          ? validateEmail(truncatedValue)
          : validatePassword(truncatedValue)
    }));
    setErrors({ ...errors, [name]: error });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = '';
    // error = Blur(name, value);
    error =
      value.trim() === ''
        ? `${name} is required`
        : name === 'Email'
          ? !validateEmail(value)
            ? 'Please enter a valid email'
            : ''
          : !validatePassword(value)
            ? 'Please enter a valid Password'
            : '';
    setErrors({ ...errors, [name]: error });
  };

  return (
    <Paper
      sx={{
        height: '300px',
        width: '432px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3
      }}
    >
      <ElTypography
        name="sign_in"
        variant="h6"
        color="black"
        content="Sign In"
        fontWeight="600"
      />
      <ElTextfields
        name="Email"
        type="text"
        size="small"
        placeholder="Enter a email"
        variant="outlined"
        value={signInData.Email}
        error={!!errors.Email}
        helperText={errors.Email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, 50)
        }
        onBlur={handleBlur}
      />
      <ElTextfields
        name="Password"
        type="password"
        size="small"
        placeholder="Enter a password"
        variant="outlined"
        error={!!errors.Password}
        helperText={errors.Password}
        value={signInData.Password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, 50)
        }
        onBlur={handleBlur}
      />
      <Grid2
        container
        size={{ xs: 12 }}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}
      >
        <Grid2
          size={{ xs: 4.8, sm: 6 }}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            backgroundColor: 'transparent'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ElCheckbox name="Remember_me" color="#D8D8D8" fontSize="2.5vh" />
            <ElTypography
              name="Remember_me"
              variant="caption"
              color="black"
              content="Remember me"
              fontWeight="400"
            />
          </div>
        </Grid2>
        <Grid2
          size={{ xs: 4.8, sm: 3.2 }}
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: 'transparent'
          }}
        >
          <ElLink href="/reset" content="Forget password" />
        </Grid2>
      </Grid2>
      <ElButton
        data-testid="sign-in"
        name="sign_in"
        variant="contained"
        disabledCondition={
          !validationStatus.email || !validationStatus.password
        }
        content="sign in"
        onClick={() =>
          handleSubmit({
            email: signInData.Email,
            password: signInData.Password
          })
        }
      />
      <ElButton
        data-testid="sign-in"
        name="sign_in"
        variant="contained"
        disabledCondition={
          !validationStatus.email || !validationStatus.password
        }
        content="sign in with zitadel"
        onClick={() =>
          signIn('zitadel', {
            callbackUrl: 'http://localhost:3000/home'
          })
        }
      />
    </Paper>
  );
}
