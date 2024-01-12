"use client"
import React from 'react'
import IntroView from './sub-view/intro-view'
import Box from '@mui/material/Box'
import MainLogo from '@/components/logo/main-logo'
import { Container } from '@mui/material'
import LandingLayout from '@/layout/landing/landing-layout'

export default function LandingView() {
    return (
        <LandingLayout>
            
            <IntroView />
        </LandingLayout>
    )
}
