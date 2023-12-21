"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import EmptyDocumentView from './sub-view/empty-document-view'
import ListDocumentView from './sub-view/list-document-view'
import BottomNavBar from '@/components/mobile-footer'
import { BookTypes } from '@/type/book/book-type'
import DashboardLayout from '@/layout/dashboard/dashboard-layout'
import Grid from '@mui/material/Grid';
import GridSystem from '@/components/grid-system/grid-system';
import BookCard from '@/components/card/book-card'
const book: BookTypes = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  state: "mine",
  isFavorite: false,
  isRecommend: false,
  isLoved: false,
  isDownLoaded: true
}



export default function DocumentView() {
  
  const documentList: BookTypes[] = [book, book, book, book]
  const [state, setState] = useState<"empty" | "list">(documentList.length === 0 ? "empty" : "list")

  const RenderView = (state: "empty" | "list") => {
    const currentView = {
      empty: <EmptyDocumentView />,
      list: <ListDocumentView data={documentList} />
    }[state]
    return (<>{currentView}</>)
  }

  return (
    <DashboardLayout>
      <Box sx={{ width: "100%" }}>
        {RenderView(state)}
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <BottomNavBar />
      </Box>
    </DashboardLayout>
  )
}
