import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/header/header';
import Footer from '@/components/footer/footer';
import BottomNavBar from '@/components/mobile-footer';

export default function HomeLayoutView({ children }: {children: React.ReactNode}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "#F5F5FA"}}>
      <Header/>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
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
        <Footer/>
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: "center",
          backgroundColor: "white" 
        }}
      >
        <BottomNavBar/>
      </Box>
    </Box>
  )
}
