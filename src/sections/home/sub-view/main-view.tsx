"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import BannerGroup from '../components/main/banner';
import Favourite from '../components/main/favorite';
import Recommend from '../components/main/recommend';
import ForYou from '../components/main/foryou';
import Carousel from '../components/main/carousel';

const images = ["/images/test/test.png", "/images/test/test1.png", "/images/test/test3.png"]

export default function MainView() {

  return (
    <Container sx={{p: "0 !important"}}>
      <Box sx={{
        flexGrow: 1,
        margin: {xs:0, md:"32px 0 32px 0"}, 
      }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <BannerGroup />
          </Grid>
          <Grid xs={12}>
            <Carousel images={images} />
          </Grid>
          <Grid xs={12}>
            <Recommend />
          </Grid>
          <Grid xs={12}>
            <Favourite />
          </Grid>
          <Grid xs={12}>
            <ForYou />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
