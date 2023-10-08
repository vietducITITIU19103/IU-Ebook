import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box';

function DarkIcon({ ...other }: BoxProps) {
    return (
        <Box component="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"

            {...other}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0279 7.06777C11.185 7.68837 10.1436 8.05507 9.01658 8.05507C6.20869 8.05507 3.93244 5.77882 3.93244 2.97093C3.93244 2.2504 4.08233 1.56488 4.35262 0.943848C2.07903 1.73139 0.446533 3.89163 0.446533 6.43315C0.446533 9.64071 3.04678 12.241 6.25434 12.241C9.24744 12.241 11.7117 9.97678 12.0279 7.06777Z" fill="#4E49D6" />
        </Box>
    )
}
export default memo(DarkIcon)