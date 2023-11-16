import React from 'react'
import BookCard from '@/components/card';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PromotionTabs from '../components/promotion-tabs';
import PromotionIcon from '@/assets/icons/promotion/promotion-icon';
import DashedLine from '@/assets/icons/promotion/dashed-line';
import ZaloLogo from "@/assets/images/zalo.png"
import Image from 'next/image';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
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
        <Grid container spacing={2}>
          {
            data.map((item: BookTypes, index: number) => (
              <Grid item xs={12} sm={6}  >
                <Box sx={{ width: "100%", borderRadius: "12px", border: "1px solid #D8DBDF", position: "relative", backgroundColor: "white" }}>
                  <PromotionIcon sx={{ position: "absolute", top: "-1.4px", left: "115px", zIndex: 3 }} />
                  <PromotionIcon sx={{ position: "absolute", bottom: "-1.4px", left: "115px", zIndex: 3, transform: "rotate(180deg)" }} />
                  <DashedLine sx={{ position: "absolute", top: "7px", left: "127px", zIndex: 3 }}/>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{py:"25px"}}>
                    <CenterVerticalLayout sx={{px:"37px", flexShrink: 0}}>
                      <Image src={ZaloLogo} width={54} height={54} alt="logo" />
                      <Typography
                        sx={{
                          color: "#9DA4AE",
                          fontFamily: "Bitter",
                          fontSize: "10px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "20px"
                        }}
                      >
                        Ví Zalopay
                      </Typography>
                    </CenterVerticalLayout>
                    <Box>
                      <Typography>Giảm 50% cho hóa đơn hơn 200k</Typography>
                      <Typography>Áp dụng cho hóa đơn từ 200k</Typography>
                      <Typography>HSD: 30/04/2023</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            ))
          }

        </Grid>
      </ThemeProvider>
    </CenterVerticalLayout >
  )
}
