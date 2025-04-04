'use client';

import { TextField } from '@mui/material';

interface TextFieldProps {
  name: string;
  type: string;
  size?: 'small' | 'medium';
  placeholder?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  [key: string]: any;
}

export const ElTextfields: React.FC<TextFieldProps> = ({
  name,
  type,
  size,
  placeholder,
  variant,
  ...props
}: any) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      name={name}
      variant={variant}
      size={size}
      type={type}
      {...props}
      sx={{ borderRadius: '1vh', pt: 2 }}
    />
  );
};
