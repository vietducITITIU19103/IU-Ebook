import React from 'react'
import Box from '@mui/material/Box';
import SectionHeader from '../section-header';
import { WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import StaticLayout from '@/components/book-list-layout/static-layout';
import { BookTypes } from '@/type/book/book-type';

const book: BookTypes = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  state: "none",
  isFavorite: true,
  isRecommend: false
}

export default function Favorite() {
  const data = [book, book, book, book, book, book, book, book]
  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: "iub.background.default",
      padding: { xs: "25px 0 25px 16px", md: "25px 0 25px 35px" },
      borderRadius: { xs: 0, md: "16px" },
      marginBottom: { xs: "-8px", md: "43px" }
    }}>
      <SectionHeader chipContent="Tiếp tục đọc hoặc mua ngay" title="Yêu thích" />
      <StaticLayout data={data} />
    </Box >
  )
}




