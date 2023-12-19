
import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box'

function InfoIcon({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" {...other} sx={{ width: "15px", height: '15px', ...sx }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.35124 1.22607C10.7566 1.22607 13.5179 3.98674 13.5179 7.39274C13.5179 10.7981 10.7566 13.5594 7.35124 13.5594C3.94524 13.5594 1.18457 10.7981 1.18457 7.39274C1.18457 3.98674 3.94524 1.22607 7.35124 1.22607Z" stroke="#9DA4AE" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.34798 4.8623V7.8083" stroke="#9DA4AE" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.34758 9.92318H7.35424" stroke="#9DA4AE" strokeLinecap="round" strokeLinejoin="round" />
        </Box>
    )
}

export default memo(InfoIcon)
