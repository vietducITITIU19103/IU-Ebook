import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function DownloadedIcon({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" {...other} sx={{ width: "15px", height: "15px", ...sx }
        }>
            <path d="M13.53 8.69633C13.03 11.1963 11.145 13.5503 8.50001 14.0763C7.21 14.3332 5.87182 14.1766 4.67601 13.6287C3.48021 13.0809 2.48773 12.1697 1.8399 11.0249C1.19208 9.88018 0.921928 8.56022 1.06792 7.25301C1.21391 5.94579 1.7686 4.71796 2.65301 3.74433C4.46701 1.74633 7.53001 1.19633 10.03 2.19633" stroke="#039855" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.0293 7.69629L7.5293 10.1963L13.5293 3.69629" stroke="#039855" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Box>
    );
}

export default memo(DownloadedIcon);