

import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function BackIcon({ sx, ...other }: BoxProps) {
    return (
        <Box sx={{py: 0, px: "3.5px", height: '24px', width: '24px'}}>
            <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none"  {...other} sx={{ width: "11px", height: "18px", position: "relative", top: "0px",...sx }} >
                <path d="M9.35937 16.5176L1.48437 8.64258L9.35938 0.767578" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </ Box>
        </Box>
    );
}

export default memo(BackIcon);