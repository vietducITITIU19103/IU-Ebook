import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function TabBg({ ...other }: BoxProps) {
    return (
      <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none" {...other}>
      <path d="M22.3184 0.533828L1.02432 23.1786C1.02432 23.1786 -0.0523278 6.27036 2.92887 2.73636C5.91007 -0.797636 22.3184 0.533828 22.3184 0.533828Z" fill="#4E49D6"/>
    </Box>
    );
}

export default memo(TabBg);