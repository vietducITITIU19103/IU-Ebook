"use client"
import React, {useContext} from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SectionHeader from '../section-header';
import StyledButton from '@/components/button/styled-button';
import ForyouBg from '@/assets/icons/background/foryou-bg';
import { BookTypes } from '@/type/book/book-type';
import DynamicLayout from '@/components/book-list-layout/dynamic-layout';
import { ThemeContext } from '@/theme';

const book: BookTypes = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  state: "none",
  isFavorite: false,
  isRecommend: false
}

export default function ForYou() {
const {themeName} = useContext(ThemeContext)
  const data = [book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book]
  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: "iub.background.default",
      overflow: "hidden",
      borderRadius: { xs: 0, md: "16px" },
      marginBottom: { xs: "20px", md: "43px" },
      position: "relative",
      py: "25px",
      display: 'flex',
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        height: "254px",
        backgroundImage: "linear-gradient(#D9D3FF, #E7E5FB, white)",
        display: themeName === "dark" ? "none" : "block"
      }}></div>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1
      }}>
        <ForyouBg sx={{ width: "180px", height: "45px" }} />
      </div>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ position: "absolute", top: "8px", left: "10px", zIndex: 1 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path d="M18.8895 7.28292C18.8895 6.71754 18.4311 6.25915 17.8657 6.25915H16.1181C16.5704 5.81303 16.8599 5.22822 16.8599 4.50797C16.8599 3.62112 16.3505 2.65775 14.9208 2.65775C13.0396 2.65775 11.4681 4.66077 10.7297 5.7836C9.99081 4.66103 8.37119 2.658 6.49025 2.658C5.06055 2.658 4.55122 3.62138 4.55122 4.50823C4.55122 5.2282 4.84862 5.81329 5.31009 6.2594H3.53281C2.96743 6.2594 2.50903 6.7178 2.50903 7.28318V10.3476H3.54177V17.0111C3.54177 17.5765 4.00015 18.0349 4.56555 18.0349H16.8458C17.4111 18.0349 17.8696 17.5765 17.8696 17.0111V10.3474H18.8895V7.28292H18.8895ZM14.9208 3.68178C15.5538 3.68178 15.8361 3.94772 15.8361 4.50824C15.8361 5.64541 14.5668 6.25889 13.3731 6.25889H11.6401C12.3675 5.17855 13.6478 3.68178 14.9208 3.68178ZM6.49024 3.6818C7.76356 3.6818 9.09216 5.17856 9.81955 6.25865H8.08604C6.89231 6.25865 5.57496 5.62928 5.57496 4.49212C5.57496 3.93185 5.85727 3.6818 6.49024 3.6818ZM17.8657 9.32357H11.2111V7.28292H17.8657V9.32357ZM3.5328 7.28292H10.1874V9.32357H3.5328V7.28292ZM4.56553 10.3474H10.1874V17.0109H4.56553V10.3474ZM16.846 17.0109H11.2111V10.3474H16.846V17.0109Z" fill="white" />
        </svg>
        <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: "18px", fontWeight: "700", color: "white", fontFamily: "inherit" }}>
          Dành cho bạn
        </Typography>
      </Stack>
      <SectionHeader chipContent="Tiếp tục đọc hoặc mua ngay" title="Yêu thích" hasTitle />
      <Box sx={{padding: { xs: "0 16px", md: "0 36px" }}}>
      <DynamicLayout data={data} />
      </Box>
      
      <StyledButton label='Xem thêm' width={112} bg='#F3633E' sx={{ mt: "40px", mb: "20px" }} />
    </Box >
  )
}




