import React from 'react';
import { CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <CircularProgress
        data-testid="loading"
        sx={{ color: 'green' }}
        size={30}
      />
    </div>
  );
}
