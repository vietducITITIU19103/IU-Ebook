import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BookCard from '@/components/card';
import SectionHeader from '@/sections/home/components/main/section-header';

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
  return (
    <Box sx={{marginTop: "8px", p: {xs:"16px 0 16px 16px",md: "40px 0"}}}>
        <SectionHeader chipContent="" title="Có thể bạn sẽ thích" />
        <Box className="scroll" sx={{overflowX: "scroll"}}>
          <Stack
            direction="row"
            spacing="20px"
            justifyContent={{ xs: "flex-start", lg: "space-between" }}
            alignItems="center"
            sx={{
              width: "100%", mb: 1
            }}
          >
            {
              [0, 1, 2, 3, 4, 5].map((item: number) => (
                <BookCard key={item} book={book} />
              ))
            }
          </Stack >
        </Box>
    </Box>
  )
}