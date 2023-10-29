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
import bookImg from "@/assets/images/book.png"
import imgSRC from "@/assets/images/ketoantaichinh.png"

export default function BookCard({ book }: any) {
  const { title, type, code, price, download, isBought, isFavorite, isRecommend } = book
  const CardContainerStyle = {
    width:"177px",
    height: "270px",
    borderRadius: "12px",
    position: "relative",
    backgroundColor: WHITE_COLOR,
    border: "1px solid #6C737F",
    cursor: "pointer",
    flexShrink: 0, 
  }
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
    <Card sx={CardContainerStyle} component="a" href="/book/1">
      {!isFavorite ?
        <div style={{ position: "absolute", top: "11px", right: "11px" }}>
          <HeartSVG />
        </div>
        :
        <div style={{ position: "absolute", top: "0", right: "0" }}>
          <FavoriteSVG />
          <Typography gutterBottom variant="body2" component="div" sx={TypographyStyle}>
            <HeartIconSVG />
            <span style={{ marginLeft: "4px" }}>Yêu thích</span>
          </Typography>
        </div>}

      <CardMedia
        sx={{ height: 177, objectFit: "contain", objectPosition: "0%" }}
        image="images/book/ketoan.png"
        title="green iguana"
      />

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
      <CardContent sx={{ padding: "10px", color: DARK_COLOR }}>
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
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#4E49D6" }}>
                <span>Đã mua</span>
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
      <div style={{ position: "absolute", bottom: "-5px", right: "0" }}>
        <PatternSVG color={!isFavorite ? PURPLE_COLOR : ORANGE_COLOR} />
      </div>
    </Card >
  )
}

