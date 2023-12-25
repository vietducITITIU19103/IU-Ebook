import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BookCard from '@/components/card/book-card';
import SectionHeader from '@/sections/home/components/main/section-header';
import StaticLayout from '@/components/book-list-layout/static-layout';
import { BookTypes } from '@/type/book/book-type';


const book: BookTypes = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  state: "none",
  isFavorite: false,
  isRecommend: true,
  isLoved: true,
  isLovedState: false
}


export default function RecommendView() {
  const data = [book, book, book, book, book, book]
  return (
    <Box sx={{  marginTop: "8px", p: { xs: "16px 0 16px 16px", md: "40px 0" } }}>
      <SectionHeader chipContent="" title="Có thể bạn sẽ thích" />
      <StaticLayout data={data} />
    </Box>
  )
}
