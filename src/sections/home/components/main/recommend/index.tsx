import React from 'react'
import Box from '@mui/material/Box';
import SectionHeader from '../section-header';
import { PURPLE_COLOR, WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import { BookTypes } from '@/type/book/book-type';
import StaticLayout from '@/components/book-list-layout/static-layout';

const book: BookTypes = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  isRecommend: true,
  state: "none",
  isFavorite: false,
  isLoved: true,
  isLovedState: false,
}

export default function Recommend() {

  const data = [book, book, book, book, book, book, book, book]
  const layout = {
    flexGrow: 1,
    backgroundColor: WHITE_COLOR,
    padding: { xs: "25px 0 25px 16px", md: "25px 0 25px 35px" },
    borderRadius: { xs: 0, md: "16px" },
    marginBottom: { xs: "-8px", md: "43px" }
  }
  return (
    <Box sx={layout}>
      <SectionHeader chipContent="Những tài liệu hữu ích nhất trong kì mới" title="Đề xuất" />
      <StaticLayout data={data} />
    </Box >
  )
}




