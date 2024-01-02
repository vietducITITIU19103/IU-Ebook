import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/header/header';
import Footer from '@/components/footer/footer';
import BottomNavBar from '@/components/mobile-footer';
import BookDetailHeader from '@/components/header/book-detail-header';

export default function BookDetailWiew({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "iub.background.body" }}>
            {/* <Box sx={{ display: { xs: "none", md: "block" } }}> */}
                <Header isResponsive/>
            {/* </Box> */}
            <Box sx={{ display: { xs: "block", md: "none" }, backgroundColor: "iub.background.default"  }}>
                <BookDetailHeader sx={{ display: "none" }} />
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
                    backgroundColor: "iub.background.default"
                }}
            >
                <Footer />
            </Box>
        </Box>
    )
}
