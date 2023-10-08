import React from 'react'
import Stack, { StackProps } from '@mui/material/Stack';

type Props = StackProps & {
    children: React.ReactNode
}

export default function CenterHorizontalLayout({ children, ...other }: Props) {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            {...other}
        >
            {children}
        </Stack>
    )
}
