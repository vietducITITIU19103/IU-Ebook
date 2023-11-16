
import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box'

function DashedLine({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="2" height="109" viewBox="0 0 2 109" fill="none" {...other} sx={{ width: "2", height: '109px', ...sx }}>
            <path d="M0.690421 0.477539L0.690425 108.144" stroke="#9DA4AE" stroke-dasharray="4 4" />
        </Box>
    )
}

export default memo(DashedLine)
