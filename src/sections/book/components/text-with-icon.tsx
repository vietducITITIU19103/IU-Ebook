import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
    icon: React.ReactNode,
    text: string,
    sx?: any,
    color?: string
}

export default function TextWithIcon({ icon, text, sx, color }: Props) {
    return (
        <Stack direction="row" alignItems="center" gap="2px" justifyContent="center">
            {icon}
            <Typography sx={{ fontSize: "16px", color: `${color?color:"#6C737F"}`, fontWeight: 700, ...sx }}>
                {text}
            </Typography>
        </Stack>
    )
}
