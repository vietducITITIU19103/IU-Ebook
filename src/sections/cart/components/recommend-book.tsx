import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BookCard from '@/components/card';
import SectionHeader from '@/sections/home/components/main/section-header';
import StaticLayout from '@/components/book-list-layout/static-layout';

const book = {
    title: "Kế toán tài chính",
    type: "Kế toán",
    code: " MS 001",
    price: "65.000",
    download: "+3k",
    isBought: false,
    isFavorite: false,
    isRecommend: true
  }
  

export default function RecommendBookList() {
  const data = [book, book, book, book, book, book, book, book]
  return (
    <Box sx={{marginTop: "8px", p: {xs:"16px 0 16px 16px",md: "40px 0"}}}>
        <SectionHeader chipContent="" title="Có thể bạn sẽ thích" />
        <StaticLayout data={data}/>
    </Box>
  )
}