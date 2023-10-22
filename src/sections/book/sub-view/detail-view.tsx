import React from 'react'
import { ContainerLayout } from '../components/book-tabs/custom-component';
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  RenderBookInfo,
  RenderControlButton,
  RenderBookBanner,
  BookDetailsFooter
} from '../components/detail-section/detail-component';
import TabView from './tab-view';
import RecommendView from './recommend-view';
import ImgSRC from "@/assets/images/ketoantaichinh.png"


export default function DetailView() {
  return (
    <>
      <RenderBookBanner />
      <ContainerLayout
        sx={{
          p: {
            xs: "0 !important",
            md: '40px !important',
          }
        }}>
        <Stack
          direction={{ xs: "column", md: 'row' }}
          justifyContent="flex-start" spacing={{ xs: "16px", md: '36px' }}
          sx={{
            backgroundColor: "white",
            marginBottom: "8px",
            paddingBottom: "20px",
            px: { xs: "16px", md: '0' }
          }}
        >
          <Box sx={{ display: { xs: "none", md: 'block' } }}>
            <Image
              src={ImgSRC}
              alt="book cover"
              width={256}
              height={264}
              style={{ objectFit: "cover", objectPosition: "center", borderRadius: "20px" }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <RenderBookInfo />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <RenderControlButton />
            </Box>
          </Box>
        </Stack>
        <TabView />
        <RecommendView />
      </ContainerLayout>
      <BookDetailsFooter />
    </>

  )
}
