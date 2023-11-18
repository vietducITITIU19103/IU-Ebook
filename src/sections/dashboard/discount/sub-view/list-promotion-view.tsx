import React from 'react'
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import { PromotionTypes } from '@/type/promotion/type';
import PromotionCard from '../components/promotion-card';

declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    xssm: true;
    smmd: true;
    // Remove default breakpoints
    xs: true;
    sm: true;
    md: true;
    mdlg: true;
    lg: true;
    xl: true;
  }
}

export default function ListPromotionView({data} : {data:PromotionTypes[]}) {
  
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
              mdlg: 1100,
              lg: 1200,
              xl: 1500,
            },
          },
        })}
      >
        <Grid container spacing={2} mt="10px">
          {
            data.map((item: PromotionTypes, index: number) => (
              <Grid item xs={12} smmd={6} md={12} mdlg={6} key={item.id} >
                <PromotionCard {...item}/>
              </Grid>
            ))
          }
        </Grid>
      </ThemeProvider>
    </CenterVerticalLayout >
  )
}
