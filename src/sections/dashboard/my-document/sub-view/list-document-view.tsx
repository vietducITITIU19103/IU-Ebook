import React from 'react'
import Stack from '@mui/material/Stack';
import BookCard from '@/components/card';
import Grid from '@mui/material/Grid';

import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
type BookTypes = {
  title: string,
  type: string,
  code: string,
  price: string,
  download: string,
  isBought: boolean,
  isFavorite: boolean,
  isRecommend: boolean
}
type Props = {
  data: BookTypes[]
}

export default function ListDocumentView({ data }: Props) {
  return (
    <>
      <Stack
        direction="row"
        rowGap="20px"
        columnGap="10px"
        justifyContent={{ xs: "flex-start", md: "flex-start" }}
        alignItems="center"
        flexWrap="wrap"
        sx={{
          mb: 1, width: 'auto', display: { xs: "none", md: "flex" }
        }}
      >

        {
          data.map((item: BookTypes, index: number) => (
            <BookCard key={index} book={item} />
          ))
        }

      </Stack >
      {/* <Grid container spacing={2}  >
        {
          data.map((item: BookTypes, index: number) => (
            <Grid item xs={6} sm={4}>
              <BookCard key={index} book={item} />
            </Grid>
          ))
        }

      </Grid> */}
    </>
  )
}
