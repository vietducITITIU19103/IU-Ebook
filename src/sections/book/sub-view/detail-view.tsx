import React from 'react'
import { MainLayout } from '@/sections/search/components/custom-component'
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import StyledButton from '@/components/button/styled-button';
import DownloadIcon from '@/assets/icons/book/download-icon';
import Avatar from '@mui/material/Avatar';
import { BookTitle, BookType, AuthorName, AuthorEmail, AuthorTitle } from '../components/custom-component';
import TextWithIcon from '../components/text-with-icon';
import UploadIcon from '@/assets/icons/book/upload-icon';
import TabView from './tab-view';
import BookCard from '@/components/card';
import { PURPLE_COLOR, WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import SectionHeader from '@/sections/home/components/main/section-header';
// import "./style.css"

const book = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  isBought: false,
  isFavorite: false,
  isRecommend: true
}


export default function DetailView() {

  const RenderBookInfo = () => (
    <>
      <BookTitle component="h1">Giáo trình Kế toán Tài chính - Phần I</BookTitle>
      <BookType>Kế toán | MS 001</BookType>
      <Stack direction="row" justifyContent="flex-start" spacing="16px">
        <TextWithIcon icon={<UploadIcon />} text="Đang cập nhật" />
        <TextWithIcon icon={<DownloadIcon sx={{ width: "24px", height: "24px" }} color="#4E49D6" />} text="156 lượt mua" color="#4E49D6"/>
      </Stack>
      <hr style={{ border: "0.5px solid #D8DBDF" }} />
      <RenderBookUploader />
    </>
  )

  const RenderBookUploader = () => (
    <>
      <AuthorTitle>
        Đăng tải bởi
      </AuthorTitle>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="16px">
        <Avatar alt="Remy Sharp" src="/images/book/ketoantaichinh.png" sx={{ width: '48px', height: "48px" }} />
        <Box>
          <AuthorName>Ths. Trình Minh</AuthorName>
          <AuthorEmail>tranvancao@uih.edu.com</AuthorEmail>
        </Box>
      </Stack>
    </>
  )

  return (
    <MainLayout>
      <Stack direction="row" justifyContent="flex-start" spacing="36px">
        <Image
          src="/images/book/ketoantaichinh.png"
          alt="book cover"
          width={256}
          height={264}
          style={{ objectFit: "cover", objectPosition: "center", borderRadius: "20px" }} />
        <Box sx={{ flexGrow: 1 }}>
          <RenderBookInfo />
          <Stack direction="row" justifyContent="flex-start" spacing="18px" mt="20px">
            <StyledButton label='Thêm vào giỏ hàng' width={170} bg='#4E49D6' />
            <StyledButton label='Mua với 56.000đ' width={170} bg='#F3633E' />
          </Stack>
        </Box>
      </Stack>
      <TabView/>
      <SectionHeader chipContent="Những tài liệu hữu ích nhất trong kì mới" title="Đề xuất" />
      <Box
        className="scroll"
        sx={{
          overflowX: "scroll",
        }} 
        >
        <Stack
          direction="row"
          spacing="20px"
          justifyContent={{ xs: "flex-start", lg: "space-between" }}
          alignItems="center"
          sx={{
            width: "100%", mb: 1
          }}
        >
          {
            [0, 1, 2, 3, 4, 5].map((item: number) => (
              <BookCard key={item} book={book} />
            ))
          }
        </Stack >
      </Box>
    </MainLayout>
  )
}
