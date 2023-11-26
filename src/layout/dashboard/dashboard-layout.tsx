"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/header/header';
import BottomNavBar from '@/components/mobile-footer';
import { Container } from '@mui/material'
import VerticalNavbar from '@/components/vertical-nav/vertical-navbar';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const path = usePathname();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "#F5F5FA", flexShrink: 1 }}>
            {!path.includes("setting") && <Header />}

            <Container sx={{
                display: "flex",
                justifyContent: "flex-start",
                mt: path.includes("setting") ? 0 : "24px",
                gap: path.includes("setting") ? 0 : "24px",
                ...(path.includes("setting") && { p: "0 !important" })
            }} >
                <VerticalNavbar />
                <Box sx={{ width: "100%" }}>{children}</Box>
            </Container>
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    justifyContent: "center",
                    backgroundColor: "white"
                }}
            >
                <BottomNavBar />
            </Box>
        </Box>
    )
}