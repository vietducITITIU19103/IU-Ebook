import React from 'react'
import HomeLayoutView from '@/layout/layout-view/home-layout-view'
import CustomSeparator from './components/breadcrumb'
import DetailView from './sub-view/detail-view'
import TabView from './sub-view/tab-view'

export default function BookView() {
  return (
    <HomeLayoutView>
      <CustomSeparator/>
      <DetailView/>
    </HomeLayoutView>
  )
}
