import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box';

function CheckIcon({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" {...other} sx={{width: '32px', height: '33px'}}>
        <path d="M5.5 17.7275L12.5 24.7275L26.5 9.72754" stroke="#F3633E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </Box>
    )
}
export default memo(CheckIcon)