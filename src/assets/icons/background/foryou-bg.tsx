import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function ForyouBg({ ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="180" height="45" viewBox="0 0 180 45" fill="none" {...other}>
        <path d="M-4 0.862061H180L171.306 25.6325C169.153 31.7659 163.504 35.9874 157.011 36.3135L-4 44.4006V0.862061Z" fill="url(#paint0_linear_0_2684)" />
        <defs>
          <linearGradient id="paint0_linear_0_2684" x1="-4" y1="22.6313" x2="180" y2="22.6313" gradientUnits="userSpaceOnUse">
            <stop stopColor="#919BFF" />
            <stop offset="1" stopColor="#210CAE" />
          </linearGradient>
        </defs>
      </Box>
    );
}

export default memo(ForyouBg);