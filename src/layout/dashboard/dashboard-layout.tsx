"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/header/header';
import BottomNavBar from '@/components/mobile-footer';
import { Container } from '@mui/material'
import VerticalNavbar from '@/components/vertical-nav/vertical-navbar';
import { usePathname } from 'next/navigation';
import { BookTypes } from '@/type/book/book-type';
import BookCard from '@/components/card/book-card';

const book: BookTypes = {
    title: "Kế toán tài chính",
    type: "Kế toán",
    code: " MS 001",
    price: "65.000",
    download: "+3k",
    state: "mine",
    isFavorite: false,
    isRecommend: false,
    isLoved: false,
    isDownLoaded: true
  }
  

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const path = usePathname();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "iub.background.body", flexShrink: 1, minHeight: "100vh" }}>
            <Header sx={{...(path.includes("setting") && { display: {xs: "none", md: "block"} })}}/>
            <Container sx={{
                display: "flex",
                justifyContent: "flex-start",
                mt: { xs: path.includes("setting") ? 0 : "24px", md: "24px" },
                gap: { xs: path.includes("setting") ? 0 : "24px", md: "24px" },
                ...(path.includes("setting") && { p: "0 !important" })
            }} >
                <VerticalNavbar />
                <Box sx={{ width: "100%" }}>{children}</Box>
            </Container>
            {children}
        </Box>
    )
}