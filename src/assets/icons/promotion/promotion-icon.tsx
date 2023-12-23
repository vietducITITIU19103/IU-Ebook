import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box'

function PromotionIcon({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="10" viewBox="0 0 24 10" fill="#F5F5FA" {...other} sx={{ width: "24px", height: '10px', ...sx }}>
            <path d="M0 1H3.5C3.5 1 4.5 9 12 9C19.5 9 20.5 1 20.5 1H24" stroke="#D8DBDF" />
            <path d="M4 1 20 1H17" stroke="#F5F5FA" className = "line"/>
        </Box>
    )
}

export default memo(PromotionIcon)
