import React from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

type Props = IconButtonProps & {
    children: React.ReactNode
}

export default function ControlButton({ children, sx, ...other }: Props) {
    return (
        <IconButton
            {...other}
            sx={{
                position: "absolute",
                top: {xs: "100%", md: "calc(50% - 16px)"},
                zIndex: 2,
                width: "35px",
                height: '35px',
                ...sx
            }}>
            {children}
        </IconButton>
    )
}
