import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';

export default function loading() {
  return (
    <CenterVerticalLayout sx={{width: "100%", height: "100vh"}}>
      <CircularProgress sx={{color: "#4E49D6"}}/>
    </CenterVerticalLayout>
  );
}

