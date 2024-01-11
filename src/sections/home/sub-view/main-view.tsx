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
import { Stack } from '@mui/system';

const images = ["/images/test/test.png", "/images/test/test1.png", "/images/test/test3.png"]

export default function MainView() {

  return (
    <Container sx={{ p: "0 !important" }}>
      <Stack
        sx={{
          flexGrow: 1,
          margin: { xs: 0, md: "32px 0 32px 0" },
        }}
        gap="15px"
      >
        <BannerGroup />
        <Carousel images={images} />
        <Favourite />
        <Recommend />
        <ForYou />
      </Stack>
    </Container>
  )
}
