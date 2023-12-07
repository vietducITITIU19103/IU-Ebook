import React from 'react'
import BookCard from '../../../../../components/card'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SectionHeader from '../section-header';
import { WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import { BookTypes } from '@/type/book/book-type';
import Grid from '@mui/material/Grid';

const book = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  isBought: false,
   isFavorite: true, 
  isRecommend: false
}

// const book = {
//   title: "Kế toán tài chính",
//   type: "Kế toán",
//   code: " MS 001",
//   price: "65.000",
//   download: "+3k",
//   isBought: false,
//   isFavorite: true, 
//   isRecommend: false
// }

export default function Favorite() {
  const data = [book,book,book,book, book,book]
  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: WHITE_COLOR,
      padding: { xs: "25px 0 25px 16px", md: "25px 0 25px 35px" },
      borderRadius: { xs: 0, md: "16px" },
      marginBottom: { xs: "-8px", md: "43px" }
    }}>
      <SectionHeader chipContent="Tiếp tục đọc hoặc mua ngay" title="Yêu thích" />
      <Box
        className="scroll"
        sx={{
          overflowX: "scroll",
          overflowY: "hidden"
        }} ><Stack
        direction="row"
        columnGap="18px"
        justifyContent={{ xs: "flex-start", lg: "space-between" }}
        alignItems="center"
        sx={{
          flexGrow: 1, width: "1190px", mb: 1
        }}
      >
        {
          <Grid container spacing="25px">
          {
            data.map((item: BookTypes, index: number) => (
              <Grid item xs={2} >
                <BookCard key={index} book={item} isRecommend/>
              </Grid>
            ))
          }

        </Grid>
        }
      </Stack >
      </Box>
    </Box >
  )
}




