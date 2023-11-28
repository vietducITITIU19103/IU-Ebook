"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import EmptyDocumentView from './sub-view/empty-document-view'
import ListDocumentView from './sub-view/list-document-view'
import BottomNavBar from '@/components/mobile-footer'

const book = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  isBought: false,
  isFavorite: false,
  isRecommend: false,
  isLoved: false
}



export default function DocumentView() {
  const documentList = [book, book, book, book, book]
  const [state, setState] = useState<"empty" | "list">(documentList.length === 0 ? "empty" : "list")

  const RenderView = (state: "empty" | "list") => {
    const currentView = {
      empty: <EmptyDocumentView />,
      list: <ListDocumentView data={documentList} />
    }[state]
    return (<>{currentView}</>)
  }

  return (
    <>
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
    </>
  )
}
