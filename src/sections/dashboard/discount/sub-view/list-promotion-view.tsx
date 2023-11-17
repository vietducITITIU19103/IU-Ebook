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
import { PromotionTitle, PromotionDescription, PromotionExpire } from '../_config/custom-typography';
import InfoIcon from '@/assets/icons/promotion/info-icon';

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
    mdlg:true;
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
              mdlg: 1100,
              lg: 1200,
              xl: 1500,
            },
          },
        })}
      >
        
        <Grid container spacing={2} mt="10px">
          {
            data.map((item: BookTypes, index: number) => (
              <Grid item xs={12} smmd={6} md={12} mdlg={6}  >
                <Box sx={{ width: "100%", height: "124px", borderRadius: "12px", border: "1px solid #D8DBDF", position: "relative", backgroundColor: "white" }}>
                  <InfoIcon sx={{position: "absolute", top: "10px", right: "10px",}}/>
                  <PromotionIcon sx={{ position: "absolute", top: "-1.4px", left: "115px", zIndex: 3 }} />
                  <PromotionIcon sx={{ position: "absolute", bottom: "-1.4px", left: "115px", zIndex: 3, transform: "rotate(180deg)" }} />
                  <DashedLine sx={{ position: "absolute", top: "7px", left: "127px", zIndex: 3 }} />
                  <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ py: "20px", height: "100%" }} spacing="30px">
                    <CenterVerticalLayout sx={{ flexShrink: 0, width: "124px" }}>
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
                    <Stack direction="column" alignItems="space-between" justifyContent="space-between" sx={{height: "100%", width: "100%", mr: "30px !important"}}>
                      <Box>
                        <PromotionTitle>Giảm 50% cho hóa đơn hơn 200k</PromotionTitle>
                        <PromotionDescription>Áp dụng cho hóa đơn từ 200k</PromotionDescription>
                      </Box>
                      <PromotionExpire>HSD: 30/04/2023</PromotionExpire>
                    </Stack>
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
