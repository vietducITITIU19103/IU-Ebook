import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/header/header';
import Footer from '@/components/footer/footer';
import BottomNavBar from '@/components/mobile-footer';

export default function BookDetailWiew({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "#F5F5FA" }}>
            <Box sx={{ display: { xs: "none", md: "block" }, backgroundColor: "white" }}>
                <Header />
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    mb: { xs: '60px', md: '0' }
                }}
            >
                {children}
            </Box>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: "center",
                    backgroundColor: "white"
                }}
            >
                <Footer />
            </Box>
        </Box>
    )
}
