import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

type Props = BoxProps & {
    isActive?: boolean
}

function UserIcon({ isActive, sx, ...other }: Props) {
    const {palette} = useTheme()
    const colorCode = isActive ? palette.iub.text.active : palette.iub.text.normal
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" {...other} sx={{ width: "12px", height: "14px", ...sx }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.98979 9.23083C3.41138 9.23083 1.20947 9.62068 1.20947 11.1819C1.20947 12.7432 3.39741 13.147 5.98979 13.147C8.5682 13.147 10.7695 12.7565 10.7695 11.1959C10.7695 9.63528 8.58217 9.23083 5.98979 9.23083Z" stroke={colorCode} strokeLinecap="round" strokeLinejoin="round" fill={isActive ? palette.iub.text.active : "transparent"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.9898 7.00396C7.68187 7.00396 9.0533 5.6319 9.0533 3.93984C9.0533 2.24777 7.68187 0.876343 5.9898 0.876343C4.29774 0.876343 2.92568 2.24777 2.92568 3.93984C2.91996 5.62618 4.2825 6.99825 5.96822 7.00396H5.9898Z" stroke={colorCode} strokeLinecap="round" strokeLinejoin="round" fill={isActive ? palette.iub.text.active : "transparent"}/>
        </Box>
    )
}
export default memo(UserIcon)