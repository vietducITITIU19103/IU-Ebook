import React from 'react'
import BookCard from '../../../../../components/card'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SectionHeader from '../section-header';
import { PURPLE_COLOR, WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import "./style.css"
import Grid from '@mui/material/Grid';

const book = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  isRecommend: true,
  // isBought: false,
   isFavorite: false,
  // isRecommend: false,
   isLoved: true,
   isLovedState: false,
}

type BookTypes = {
  title: string,
  type: string,
  code: string,
  price: string,
  download: string,
  isBought?: boolean,
  isFavorite?: boolean,
  isRecommend?: boolean,
  isLoved?: boolean,
  isLovedState?: boolean
}


export default function Recommend() {

  const data = [book,book,book,book, book,book]
  const layout = {
    flexGrow: 1,
    backgroundColor: WHITE_COLOR,
    padding: { xs: "25px 0 25px 16px", md: "25px 0 25px 35px" },
    borderRadius: { xs: 0, md: "16px" },
    marginBottom: "43px",
  }
  return (
    <Box sx={layout}>
      <SectionHeader chipContent="Những tài liệu hữu ích nhất trong kì mới" title="Đề xuất" />
      <Box
        className="scroll"
        sx={{
          overflowX: "scroll",
        }} >
        <Stack
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




