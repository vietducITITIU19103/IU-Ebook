import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box'

function LoginBg({ ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="532" height="629" viewBox="0 0 532 629" fill="none" {...other}>
            <path d="M320.868 0.167603H93.2963C42.2631 0.167603 0.926758 37.6466 0.926758 83.9176V544.417C0.926758 590.688 42.2631 628.168 93.2963 628.168H439.557C490.59 628.168 531.927 590.688 531.927 544.417V191.532C531.927 169.326 522.174 148.024 504.886 132.299L386.197 24.6847C368.853 8.95963 345.359 0.167603 320.868 0.167603Z" fill="#FDD8CE" />
        </Box>
    )
}

export default memo(LoginBg)
