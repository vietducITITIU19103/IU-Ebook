import React from 'react'
import BookCard from '@/components/card';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PromotionTabs from '../components/promotion-tabs';

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

declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    xssm: true;
    smmd: true;
    // Remove default breakpoints
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}


export default function ListPromotionView({ data }: Props) {
  return (
    <CenterVerticalLayout>
      <ThemeProvider
        theme={createTheme({
          breakpoints: {
            values: {
              xs: 0,
              xssm: 450,
              sm: 600,
              smmd: 800,
              md: 900,
              lg: 1200,
              xl: 1500,
            },
          },
        })}
      >
        <PromotionTabs></PromotionTabs>
        {/* <Grid container spacing={2}>
          {
            data.map((item: BookTypes, index: number) => (
              <Grid item xs={6} sm={4} smmd={3} md={4} lg={2.4} >
                <BookCard key={index} book={item} isRecommend/>
              </Grid>
            ))
          } */}
<svg xmlns="http://www.w3.org/2000/svg" width="19" height="9" viewBox="0 0 19 9" fill="white">
  <path d="M1 0.5C1 0.5 3 8.5 10 8.5C17 8.5 18.5 0.5 18.5 0.5" stroke="black"/>
</svg>
        {/* </Grid> */}
      </ThemeProvider>
    </CenterVerticalLayout >
  )
}
