"use client"
import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RecommendSVG from '../../sections/home/components/main/svg/recommendSVG';
import HeartSVG from '../../sections/home/components/main/svg/heartSVG';
import FavoriteSVG from '../../sections/home/components/main/svg/favouriteSVG';
import HeartIconSVG from '../../sections/home/components/main/svg/heartIconSVG';
import PatternSVG from '../../sections/home/components/main/svg/parternSVG';
import DownloadIconSVG from '../../assets/icons/book/download-icon';
import BoughtIconSVG from '../../sections/home/components/main/svg/boughtIconSVG';
import { PURPLE_COLOR, WHITE_COLOR, LIGHT_DARK, ORANGE_COLOR, DARK_COLOR } from '@/app/color'
import CustomBackdrop from '@/components/backdrop/custom-backdrop';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import FavoriteIcon from '@/assets/icons/toast/favorite-icon';
import { useRouter } from 'next/navigation';
import { CustomCard, BookTitle, BookType, BookState, BookPrice, RecommendContainer, BookRCM, BookFVR } from './custom-component';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DownloadedIcon from '@/assets/icons/book/downloaded-icon';
import { BookTypes } from '@/type/book/book-type';

export default function BookCard({ title, type, code, price, download, state, isFavorite, isRecommend, isLoved, isLovedState, isDownLoaded, sx, ...other }: CardProps & BookTypes) {

  const router = useRouter();
  const [active, setActive] = React.useState<boolean>(isLovedState || false)
  const toggleState = React.useCallback(() => {
    setActive(!active)
  }, [active])

  const renderView = (viewName: "bought" | "mine" | "none") => {
    const currentView = {
      bought: <BoughtState />,
      mine: <MineState />,
      none: <NoneState />
    }[viewName]
    return currentView
  }

  const NoneState = () => (
    <>
      <BookPrice color="text.secondary">
        <span>{price}</span>
        <span style={{ textDecoration: "underline" }}>đ</span>
      </BookPrice>
      <Stack direction="row" alignItems="center" gap="2px" justifyContent="center">
        <DownloadIconSVG />
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px", color: "inherit" }}>
          {download}
        </Typography>
      </Stack></>
  )

  const BoughtState = () => (
    <>
      <Stack direction="row" alignItems="center" spacing="4px" sx={{ position: "relative", top: "3px" }}>
        <BoughtIconSVG />
        <BookState>Đã mua</BookState>
      </Stack>
      <Stack direction="row" alignItems="center" gap="2px" justifyContent="center">
        <DownloadIconSVG />
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px", color: "inherit" }}>
          {download}
        </Typography>
      </Stack>
    </>
  )

  const MineState = () => (
    <Stack direction="row" alignItems="center" spacing="4px" sx={{ position: "relative", top: "3px" }}>
      <BookState sx={{ color: isDownLoaded ? "#F3633E" : "#D8DBDF" }}>Code: {code}</BookState>
    </Stack>
  )

  return (
    <Box sx={{ position: "relative" }}>
      <CustomCard
        onClick={() => router.push("/book/1")}
        sx={{ ...sx }}
        {...other}>
        <CardMedia
          sx={{ height: 177, objectFit: "contain", objectPosition: "0%" }}
          image="/images/book/ketoan.png"
          title={title}
        />
        <CardContent sx={{ padding: "10px", color: DARK_COLOR, backgroundColor: "white" }}>
          <BookTitle gutterBottom component="h5">{title}</BookTitle>
          <BookType color="text.secondary">{type} | {code}</BookType>
          <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="flex-end">
            {renderView(state)}
          </Stack>
        </CardContent>

        {isFavorite &&
          <Box sx={{ position: "absolute", top: "0", right: "0" }}>
            <FavoriteSVG />
            <BookFVR gutterBottom>
              <HeartIconSVG />
              <span style={{ marginLeft: "4px" }}>Yêu thích</span>
            </BookFVR>
          </Box>}

        {
          isDownLoaded &&
          <Chip
            icon={<DownloadedIcon />}
            label="Đã tải"
            size='small'
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#039855",
              borderRadius: "8px",
              position: "absolute",
              top: "10px",
              right: "10px"
            }}
          />
        }

        {isRecommend &&
          <RecommendContainer>
            <div style={{ position: "absolute" }}><RecommendSVG /></div>
            <BookRCM gutterBottom>Đề xuất bởi giảng viên</BookRCM>
          </RecommendContainer>
        }

        <div style={{ position: "absolute", bottom: "-5px", right: "0" }}>
          <PatternSVG color={!isFavorite ? PURPLE_COLOR : ORANGE_COLOR} />
        </div>
      </CustomCard >
      {isLoved &&
        <div style={{ position: "absolute", top: "11px", right: "11px" }}>
          <CustomBackdrop
            state={active}
            insideComponent={
              <CenterVerticalLayout sx={{ backgroundColor: "rgba(17, 25, 39, 0.6)", borderRadius: "16px", width: "246px", height: "120px" }}>
                <FavoriteIcon />
                <Typography>Đã thêm tài liệu vào “Yêu thích”</Typography>
              </CenterVerticalLayout>}
          >
            <HeartSVG toggleState={toggleState} active={active} />
          </CustomBackdrop>
        </div>}
    </Box>
  )
}

