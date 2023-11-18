"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import EmptyFavouriteView from './sub-view/empty-favourite-view'
import ListFavouriteView from './sub-view/list-favourite-view'

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


export default function FavouriteView() {
  const FavouriteList = [book,book,book,book, book]
 // const FavouriteList: any = [];
  const [state, setState] = useState<"empty" | "list">(FavouriteList.length === 0 ? "empty" : "list")

  const RenderView = (state: "empty" | "list") => {
    const currentView = {
      empty: <EmptyFavouriteView />,
      list: <ListFavouriteView data={FavouriteList}/>
    }[state]
    return (<>{currentView}</>)
  }

  return (
    <Box sx={{ width: "100%" }}>
      {RenderView(state)}
    </Box>
  )
}
