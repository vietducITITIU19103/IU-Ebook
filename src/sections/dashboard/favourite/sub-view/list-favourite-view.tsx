import React from 'react'
import BookCard from '@/components/card';
import Grid from '@mui/material/Grid';
import GridSystem from '@/components/grid-system/grid-system';

import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
type BookTypes = {
  title: string,
  type: string,
  code: string,
  price: string,
  download: string,
  isBought: boolean,
  isFavorite: boolean,
  isRecommend: boolean,
  isLoved: boolean,
  isLovedState: boolean
}
type Props = {
  data: BookTypes[]
}

export default function ListFavouriteView({ data }: Props) {
  return (
    <CenterVerticalLayout>
      <GridSystem>
        <Grid container spacing={2}>
          {
            data.map((item: BookTypes, index: number) => (
              <Grid item xs={6} sm={4} smmd={3} md={4} lg={2.4} >
                <BookCard key={index} book={item} isRecommend/>
              </Grid>
            ))
          }
        </Grid>
      </GridSystem>
    </CenterVerticalLayout >
  )
}
