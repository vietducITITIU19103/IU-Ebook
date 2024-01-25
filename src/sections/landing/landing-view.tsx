"use client"
import React from 'react'
import IntroView from './sub-view/intro-view'
import LandingLayout from '@/layout/landing/landing-layout'
import LibView from './sub-view/lib-view'


export default function LandingView() {
    return (
        <LandingLayout>
            <IntroView />
            <LibView />
            
        </LandingLayout>
    )
}
