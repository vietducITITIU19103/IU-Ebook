import React from 'react'
import { MainLayout } from '@/sections/search/components/custom-component'
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { RenderBookInfo, RenderBookUploader, RenderControlButton } from '../components/detail-section/detail-component';
import TabView from './tab-view';
import RecommendView from './recommend-view';
import ImgSRC from "@/assets/images/ketoantaichinh.png"
// import "./style.css"


export default function DetailView() {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: 'none' }, width: "100%", backgroundColor: "pink", aspectRatio: "1/1", position: 'relative' }}>
        <Image
          src={ImgSRC}
          alt="book cover"
          style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }} />
      </Box>
      <MainLayout sx={{ p: { xs: "0 !important", md: '40px !important' } }}>
        <Stack
          direction={{ xs: "column", md: 'row' }}
          justifyContent="flex-start" spacing={{ xs: "16px", md: '36px' }}
          sx={{ backgroundColor: "white", marginBottom: "8px", paddingBottom: "20px", px: { xs: "16px", md: '0' } }}
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
      </MainLayout>
    </>

  )
}
