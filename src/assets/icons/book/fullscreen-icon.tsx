import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function FullscreenIcon({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none" {...other} sx={{ width: "30px", height: "30px", ...sx }}>
            <g clip-path="url(#clip0_1_15004)">
                <path d="M8.62443 16.9165H6.20776V22.9582H12.2494V20.5415H8.62443V16.9165ZM6.20776 12.0832H8.62443V8.45817H12.2494V6.0415H6.20776V12.0832ZM20.7078 20.5415H17.0828V22.9582H23.1244V16.9165H20.7078V20.5415ZM17.0828 6.0415V8.45817H20.7078V12.0832H23.1244V6.0415H17.0828Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_1_15004">
                    <rect width="29" height="29" fill="white" transform="translate(0.166016)" />
                </clipPath>
            </defs>
        </Box>
    );
}

export default memo(FullscreenIcon);