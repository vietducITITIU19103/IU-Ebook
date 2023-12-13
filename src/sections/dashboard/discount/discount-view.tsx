"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import EmptyPromotionView from './sub-view/empty-promotion-view'
import PromotionTabs from './components/promotion-tabs'
import { PromotionTypes } from '@/type/promotion/type'
import ZaloLogo from "@/assets/images/zalo.png"
import MomoLogo from "@/assets/images/momo.png"
import BottomNavBar from '@/components/mobile-footer'

const data: PromotionTypes[] = [
  {
    id: "1",
    logo: ZaloLogo,
    logoDes: "Ví Zalopay",
    title: "Giảm 50% cho hóa đơn hơn 200k",
    description: "Áp dụng cho hóa đơn từ 200k",
    expire: "30/04/2023"
  },
  {
    id: "2",
    logo: MomoLogo,
    logoDes: "Ví Momo",
    title: "Giảm 50% cho hóa đơn hơn 200k",
    description: "Áp dụng cho hóa đơn từ 200k",
    expire: "30/04/2023"
  },
  {
    id: "3",
    logo: ZaloLogo,
    logoDes: "Ví Zalopay",
    title: "Giảm 50% cho hóa đơn hơn 200k",
    description: "Áp dụng cho hóa đơn từ 200k",
    expire: "30/04/2023"
  },
  {
    id: "4",
    logo: MomoLogo,
    logoDes: "Ví Momo",
    title: "Giảm 50% cho hóa đơn hơn 200k",
    description: "Áp dụng cho hóa đơn từ 200k",
    expire: "30/04/2023"
  },
  {
    id: "5",
    logo: MomoLogo,
    logoDes: "Ví Momo",
    title: "Giảm 50% cho hóa đơn hơn 200k",
    description: "Áp dụng cho hóa đơn từ 200k",
    expire: "30/04/2023"
  },
  {
    id: "6",
    logo: MomoLogo,
    logoDes: "Ví Momo",
    title: "Giảm 50% cho hóa đơn hơn 200k",
    description: "Áp dụng cho hóa đơn từ 200k",
    expire: "30/04/2023"
  }
]



export default function DiscountView() {
  const PromoList = data;
  //const PromoList: any = [];
  const [state, setState] = useState<"empty" | "list">(PromoList.length === 0 ? "empty" : "list")

  const RenderView = (state: "empty" | "list") => {
    const currentView = {
      empty: <EmptyPromotionView />,
      list: <PromotionTabs data={PromoList} />
    }[state]
    return (<>{currentView}</>)
  }

  return (
    <Box>
      <Box sx={{ width: "100%", mb: "130px" }}>
        {RenderView(state)}
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <BottomNavBar />
      </Box>
    </Box>
  )
}
