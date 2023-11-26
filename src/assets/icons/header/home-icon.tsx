import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box';

type Props = BoxProps & {
    isActive?: boolean
}


function HomeIcon({ isActive, sx, ...other }: Props) {
    const colorCode = isActive ? "#4E49D6" : "#6C737F"
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill={colorCode ? "#4E49D6" : "none"} {...other} sx={{ width: "14px", height: "16px", ...sx }}>
            <path d="M5.10477 13.8476V11.8032C5.10476 11.2831 5.5287 10.8606 6.05397 10.8571H7.97802C8.50579 10.8571 8.93363 11.2807 8.93363 11.8032V11.8032V13.854C8.93351 14.2955 9.28946 14.6564 9.73532 14.6667H11.018C12.2967 14.6667 13.3333 13.6405 13.3333 12.3746V12.3746V6.5586C13.3265 6.06059 13.0903 5.59294 12.6919 5.28873L8.30511 1.79024C7.53658 1.18108 6.4441 1.18108 5.67557 1.79024L1.30798 5.29508C0.908132 5.59806 0.67155 6.06648 0.666626 6.56495V12.3746C0.666626 13.6405 1.70321 14.6667 2.9819 14.6667H4.2646C4.72153 14.6667 5.09194 14.3 5.09194 13.8476V13.8476" stroke={colorCode} strokeLinecap="round" strokeLinejoin="round" />
        </Box>
    )
}
export default memo(HomeIcon)