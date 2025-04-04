import React from 'react';
import { CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <CircularProgress data-testid="loading" sx={{ color: 'green' }} size={30} />
  );
}
