import React from 'react'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import "../../../book/components/book-tabs/style.css"
import Image from 'next/image'
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout'

export default function EmptyLayout({ children, src, direction, width }: { children: React.ReactNode, src: any, direction: any, width: number }) {
    return (
        <Stack direction={direction} justifyContent="center" alignItems="center" sx={{ mt: "86px", mb: "50px", width: "100%" }} spacing="24px">
            <Stack maxWidth={{ xs: "100%", md: width + "px" }} alignItems={{ xs: "center", md: "flex-start" }}>
                {children}
            </Stack>
            <Image src={src} alt="empty cart illustration" style={{ width: "480px", height: 'auto' }} />
        </Stack>
    )
}