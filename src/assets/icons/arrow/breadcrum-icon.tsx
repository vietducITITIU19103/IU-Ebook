import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function BreadcrumIcon({ ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none" {...other} sx={{width: "9px", height: "16px", ...other.sx}} >
            <path d="M1.19922 1L8.19922 8L1.19922 15" stroke="#9DA4AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Box>
    );
}

export default memo(BreadcrumIcon);