/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Typography } from '@mui/material';

export default function DrawerList() {
  return (
    <div
      style={{ backgroundColor: 'lime', minHeight: '91vh', marginTop: '65px' }}
    >
      <div
        style={{
          height: '65px',
          backgroundColor: 'green'
        }}
      >
        <Typography sx={{ color: 'white', textAlign: 'center' }}>
          BDP
        </Typography>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#section1">Dashboard</a>
          </li>
          <li>
            <a href="#section2">Reports</a>
          </li>
          <li>
            <a href="#section3">Alerts</a>
          </li>
          <li>
            <a href="#section4">Transaction</a>
          </li>
          <li>
            <a href="#section4">Anomalies</a>
          </li>
          <li>
            <a href="#section4">users</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
