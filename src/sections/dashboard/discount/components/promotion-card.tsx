import React, { useContext } from 'react'
import PromotionIcon from '@/assets/icons/promotion/promotion-icon';
import DashedLine from '@/assets/icons/promotion/dashed-line';
import Image from 'next/image';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { PromotionTitle, PromotionDescription, PromotionExpire, LogoDescription } from '../_config/custom-typography';
import InfoIcon from '@/assets/icons/promotion/info-icon';
import { PromotionTypes } from '@/type/promotion/type';
import { ThemeContext } from '@/theme';

export default function PromotionCard(item: PromotionTypes) {
  const { palette: { iub: { text, background } } } = useContext(ThemeContext)
  const RenderBackgroundObj = () => (
    <>
      <InfoIcon sx={{ position: "absolute", top: "10px", right: "10px", }} />
      <PromotionIcon sx={{ position: "absolute", top: "-1.4px", left: "115px", zIndex: 3 , fill: background.body, "&>.line":{stroke: background.body}}} />
      <PromotionIcon sx={{ position: "absolute", bottom: "-1.4px", left: "115px", zIndex: 3, transform: "rotate(180deg)", fill: background.body, "&>.line":{stroke: background.body} }} />
      <DashedLine sx={{ position: "absolute", top: "7px", left: "127px", zIndex: 3 }} />
    </>
  )
  return (
    <Box
      sx={{
        width: "100%",
        height: "124px",
        borderRadius: "12px",
        border: "1px solid #D8DBDF",
        position: "relative",
        backgroundColor: background.default
      }}
    >
      <RenderBackgroundObj />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ py: "20px", height: "100%" }}
        spacing="30px"
      >
        <CenterVerticalLayout sx={{ flexShrink: 0, width: "124px" }}>
          <Image src={item.logo} width={54} height={54} alt="logo" />
          <LogoDescription>{item.logoDes}</LogoDescription>
        </CenterVerticalLayout>
        <Stack
          direction="column"
          alignItems="space-between"
          justifyContent="space-between"
          sx={{ height: "100%", width: "100%", mr: "30px !important" }}
        >
          <Box>
            <PromotionTitle sx={{color: text.main}}>{item.title}</PromotionTitle>
            <PromotionDescription>{item.description}</PromotionDescription>
          </Box>
          <PromotionExpire sx={{color: text.main}}>HSD: {item.expire}</PromotionExpire>
        </Stack>
      </Stack>
    </Box>
  )
}
