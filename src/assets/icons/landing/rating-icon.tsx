import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function RatingIcon({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" {...other} sx={{ width: "17px", height: "17px", ...sx }}>
            <path d="M8.36393 2.08333L10.4239 6.25666L15.0306 6.93L11.6973 10.1767L12.4839 14.7633L8.36393 12.5967L4.24393 14.7633L5.0306 10.1767L1.69727 6.93L6.30393 6.25666L8.36393 2.08333Z" fill="#FFB800" stroke="#FFB800" stroke-linecap="round" stroke-linejoin="round" />
        </Box>
    );
}

export default memo(RatingIcon);