'use client';

import React, { useContext } from 'react';
import { Snackbar, Alert, Grid2 } from '@mui/material';
import { AlertContext } from '../../contexts/alertContext';

export default function CompSnackBarAlert() {
  const { alertOpen, setAlertOpen, alertSeverity, alert, alertHideDuration } =
    useContext(AlertContext)!;

  return (
    <Grid2 size={{ xs: 3 }} justifyContent={'center'} alignItems={'center'}>
      <Snackbar
        open={alertOpen}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={alertHideDuration}
        onClose={() => setAlertOpen(false)}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity={alertSeverity ? 'error' : 'success'}
          variant="filled"
          sx={{ color: 'white' }}
        >
          {alert}
        </Alert>
      </Snackbar>
    </Grid2>
  );
}
