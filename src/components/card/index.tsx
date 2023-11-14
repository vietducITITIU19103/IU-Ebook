import * as React from 'react';
import Card from '@mui/material/Card';
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
import CustomBackdrop from '@/sections/dashboard/favourite/components/custom-backdrop';

export default function BookCard({ book }: any) {
  const { title, type, code, price, download, isBought, isFavorite, isRecommend, isLoved, isLovedState } = book

  const TypographyStyle = {
    fontSize: "12px",
    fontWeight: "500",
    color: "white",
    position: "absolute",
    zIndex: "3",
    top: "6px",
    right: "6px"
  }
  return (
    <Card sx={{ backgroundColor: "black !important", position: "relative", overflow: "hidden", borderRadius: "12px" }}>


      <CardMedia
        sx={{ height: 177, objectFit: "contain", objectPosition: "0%" }}
        image="/images/book/ketoan.png"
        title="green iguana"
      />
      <CardContent sx={{ padding: "10px", color: DARK_COLOR, backgroundColor: "white" }}>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "inherit",
            color: "inherit"
          }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "10px",
            fontFamily: "inherit",
            color: "inherit"
          }}>
          {type} | {code}
        </Typography>
        <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="flex-end">
          {isBought ?
            <Stack direction="row" alignItems="center" spacing="4px" sx={{ position: "relative", top: "3px" }}>
              <BoughtIconSVG />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#4E49D6", fontFamily: "inherit", }}>
                Đã mua
              </Typography>
            </Stack>
            :
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#F3633E",
                position: "relative",
                fontFamily: "inherit",
                top: "3.5px"
              }}>
              <span>
                {price}
              </span>
              <span style={{ textDecoration: "underline" }}>đ</span>
            </Typography>}
          <Stack direction="row" alignItems="center" gap="2px" justifyContent="center">
            <DownloadIconSVG />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px", color: "inherit" }}>
              {download}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>

      {isFavorite &&
        <div style={{ position: "absolute", top: "0", right: "0" }}>
          <FavoriteSVG />
          <Typography gutterBottom variant="body2" component="div" sx={TypographyStyle}>
            <HeartIconSVG />
            <span style={{ marginLeft: "4px" }}>Yêu thích</span>
          </Typography>
        </div>}

      {isLoved && <div style={{ position: "absolute", top: "11px", right: "11px" }}>
        <CustomBackdrop><HeartSVG state={isLovedState}/></CustomBackdrop>
      </div>}

      {isRecommend &&
        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          top: "-10px"
        }}>
          <div style={{ position: "absolute" }}>
            <RecommendSVG />
          </div>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              color: "white",
              position: "absolute",
              paddingLeft: "7px",
              fontFamily: "inherit"
            }}>
            Đề xuất bởi giảng viên
          </Typography>
        </div>
      }

      <div style={{ position: "absolute", bottom: "-5px", right: "0" }}>
        <PatternSVG color={!isFavorite ? PURPLE_COLOR : ORANGE_COLOR} />
      </div>
    </Card >
  )
}

