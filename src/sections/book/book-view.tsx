"use client"
import React from 'react'
import CustomSeparator from './components/breadcrumb'
import DetailView from './sub-view/detail-view'
import BookDetailWiew from '@/layout/layout-view/book-detail-view'

export default function BookView() {
  return (
    <BookDetailWiew>
      <CustomSeparator/>
      <DetailView/>
    </BookDetailWiew>
  )
}
