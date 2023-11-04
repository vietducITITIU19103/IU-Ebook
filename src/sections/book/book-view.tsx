"use client"
import React from 'react'
import HomeLayoutView from '@/layout/layout-view/home-layout-view'
import CustomSeparator from './components/breadcrumb'
import DetailView from './sub-view/detail-view'
import BookDetailWiew from '@/layout/layout-view/book-detail-view'
import TabView from './sub-view/tab-view'

export default function BookView() {
  return (
    <BookDetailWiew>
      <CustomSeparator/>
      <DetailView/>
    </BookDetailWiew>
  )
}
