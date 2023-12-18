import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/header/header';
import Footer from '@/components/footer/footer';
import BottomNavBar from '@/components/mobile-footer';
import { useTheme } from '@mui/material/styles';

export default function HomeLayoutView({ children }: { children: React.ReactNode }) {
  // const { palette: { iub } } = useTheme()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "iub.background.body" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          mb: "60px"
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
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: "center",
          backgroundColor: "iub.background.default" 
        }}
      >
        <BottomNavBar />
      </Box>
    </Box>
  )
}
