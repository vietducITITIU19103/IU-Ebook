import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';
import { useContext } from 'react';
import { ThemeContext } from '@/theme';

// ----------------------------------------------------------------------

function BackArrowIcon({ sx, ...other }: BoxProps) {
    const {palette: {iub: {text}}} = useContext(ThemeContext)
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none" {...other} sx={{ width: "20px", height: "19px", ...sx }} >
            <path d="M1.65527 9.36564L21.6553 9.36564" stroke={text.active} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.72168 17.3982L1.65501 9.36622L9.72168 1.33289" stroke={text.active} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </Box>
    );
}

export default memo(BackArrowIcon);