import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/header/header';
import Footer from '@/components/footer/footer';
import BottomNavBar from '@/components/mobile-footer';
import CartHeader from '@/components/header/cart-header';

export default function CartViewLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "iub.background.body", minHeight: "100vh" }}>
      {/* <Box sx={{ display: { xs: "none", md: "block" }, backgroundColor: "white" }}> */}
        <Header sx={{display: { xs: "none", md: "block" }}}/>
      {/* </Box> */}
      <Box sx={{ display: { xs: "block", md: "none" }, backgroundColor: "white" }}>
        <CartHeader title="Giỏ hàng"/>
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
    </Box>
  )
}
