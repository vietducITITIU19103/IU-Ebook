import React from 'react'
import HomeLayoutView from '@/layout/layout-view/home-layout-view'
import WelcomeView from './sub-view/welcome-view'
import MainView from './sub-view/main-view'

export default function HomeView() {
  return (
    <HomeLayoutView>
      <MainView/>
    </HomeLayoutView>
  )
}
