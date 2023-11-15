"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import EmptyPromotionView from './sub-view/empty-promotion-view'
import ListPromotionView from './sub-view/list-promotion-view'

const book = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  isBought: false,
  isFavorite: false,
  isRecommend: false,
  isLoved: true,
  isLovedState: true,
}



export default function DiscountView() {
  const PromoList = [book,book,book,book, book]
  //const PromoList: any = [];
  const [state, setState] = useState<"empty" | "list">(PromoList.length === 0 ? "empty" : "list")

  const RenderView = (state: "empty" | "list") => {
    const currentView = {
      empty: <EmptyPromotionView />,
      list: <ListPromotionView data={PromoList}/>
    }[state]
    return (<>{currentView}</>)
  }

  return (
    <Box sx={{ width: "100%" }}>
      {RenderView(state)}
    </Box>
  )
}
