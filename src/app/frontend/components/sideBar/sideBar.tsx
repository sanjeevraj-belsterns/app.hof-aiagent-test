/* eslint-disable prettier/prettier */
'use client';

import { Drawer } from '@mui/material';

export default function Sidebar() {
  return (
    <div
      className={false ? 'no-sidebar' : 'sidebar'}
      style={{ backgroundColor: 'orange' }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '250px',
            backgroundColor: 'blue'
          }
        }}
        open
      >
        {/* <DrawerList /> */}
      </Drawer>
    </div>
  );
}
