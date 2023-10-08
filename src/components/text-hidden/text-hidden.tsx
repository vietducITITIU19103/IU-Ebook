import Typography from '@mui/material/Typography';
import React, { memo } from 'react';

const TextHidden = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      component="h1"
      sx={{
        position: 'absolute',
        opacity: 0,
        visibility: 'hidden',
        top: 0,
        left: 0,
      }}
    >
      {children}
    </Typography>
  );
};

export default memo(TextHidden);
