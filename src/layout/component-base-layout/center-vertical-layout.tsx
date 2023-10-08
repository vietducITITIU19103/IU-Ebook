import React from 'react'
import Stack, { StackProps } from '@mui/material/Stack';

type Props = StackProps & {
    children: React.ReactNode
}

export default function CenterVerticalLayout({ children, ...other }: Props) {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            {...other}
        >
            {children}
        </Stack>
    )
}
