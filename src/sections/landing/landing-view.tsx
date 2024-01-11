"use client"
import React from 'react'
import IntroView from './sub-view/intro-view'
import Box from '@mui/material/Box'
import MainLogo from '@/components/logo/main-logo'
import { Container } from '@mui/material'

export default function LandingView() {
    return (
        <>
            <Container>
                <Box height="90px" width={1}>
                    <Box borderRadius="0px 0px 16px 16px" bgcolor="#0D006A" maxWidth="215px" py="23px">
                        <MainLogo/>
                    </Box>
                </Box>
            </Container>
            <IntroView />
        </>
    )
}
