import React from 'react'
import LandingHeader from './header/landing-header'
import Box from '@mui/material/Box';
import LandingFooter from './footer/landing-footer';
import { Container } from '@mui/system';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "iub.background.default" }}>
      <LandingHeader />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
      <Box bgcolor="#0D006A">
        <Container
          sx={{
            p: "0 !important",
            justifyContent: "center",
            backgroundColor: "iub.background.default"
          }}
        >
          <LandingFooter />
        </Container>
      </Box>

      {/* <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: "center",
          backgroundColor: "iub.background.default" 
        }}
      >
        <BottomNavBar />
      </Box> */}
    </Box>
  )
}
