import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box';

function HeartIcon({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none" {...other} sx={{width: "28px", heigth: "29px", ...sx}}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.35084 13.7589C2.099 9.85058 3.562 5.38341 7.66517 4.06158C9.8235 3.36508 12.2058 3.77575 14.0002 5.12558C15.6977 3.81308 18.1675 3.36975 20.3235 4.06158C24.4267 5.38341 25.899 9.85058 24.6483 13.7589C22.7 19.9539 14.0002 24.7256 14.0002 24.7256C14.0002 24.7256 5.3645 20.0262 3.35084 13.7589Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.667 8.04395C19.9153 8.44761 20.7973 9.56178 20.9035 10.8696" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </Box>
    )
}
export default memo(HeartIcon)