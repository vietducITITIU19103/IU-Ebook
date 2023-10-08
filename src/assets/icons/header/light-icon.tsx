import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box';

function LightIcon({ ...other }: BoxProps) {
    return (
        <Box component="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...other}
        >
            <ellipse cx="10.0286" cy="9.9911" rx="2.46693" ry="2.46693" fill="white" />
            <path d="M10.8516 6.32328L11.2451 4.5481" stroke="white" strokeLinecap="round" />
            <path d="M13.4794 8.54838L15.1415 7.74268" stroke="white" strokeLinecap="round" />
            <path d="M7.28783 7.38488L5.90405 6.16797" stroke="white" strokeLinecap="round" />
            <path d="M9.22014 13.6819L8.84546 15.3721" stroke="white" strokeLinecap="round" />
            <path d="M12.9168 12.3395L14.2449 13.6074" stroke="white" strokeLinecap="round" />
            <path d="M6.38048 11.0068L4.71252 11.7046" stroke="white" strokeLinecap="round" />
        </Box>
    )
}
export default memo(LightIcon)