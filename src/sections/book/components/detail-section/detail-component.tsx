import React, { useState } from 'react'
import Stack, { StackProps } from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { IconContainer } from '@/components/icon-container/icon-container';
import StyledButton from '@/components/button/styled-button';
import DownloadIcon from '@/assets/icons/book/download-icon';
import Avatar from '@mui/material/Avatar';
import { BookTitle, BookType, AuthorName, AuthorEmail, AuthorTitle } from "../custom-component"
import TextWithIcon from '../text-with-icon';
import UploadIcon from '@/assets/icons/book/upload-icon';
import Image from 'next/image';
import ImgSRC from "@/assets/images/ketoantaichinh.png"
import BackIcon from '@/assets/icons/arrow/back-icon';
import CartIcon from '@/assets/icons/header/cart-icon';
import CenterHorizontalLayout from '@/layout/component-base-layout/center-horizontal-layout';
import { useRouter } from 'next/navigation';
import AddToCartBackdrop from '../add-to-cart-backdrop/add-to-cart-backdrop';
import { useContext } from 'react';
import { ThemeContext } from '@/theme';

export const RenderBookInfo = () => {
    const { palette } = useContext(ThemeContext)
    return (
        
            <>
                <BookTitle component="h1" sx={{color: "iub.text.main"}}>Giáo trình Kế toán Tài chính - Phần I</BookTitle>
                <BookType sx={{color: "iub.text.normal"}}>Kế toán | MS 001</BookType>
                <Stack direction="row" justifyContent="flex-start" spacing="16px">
                    <TextWithIcon icon={<UploadIcon />} text="Đang cập nhật" />
                    <TextWithIcon icon={<DownloadIcon sx={{ width: "24px", height: "24px" }} color="#4E49D6" />} text="156 lượt mua" color="#4E49D6" />
                </Stack>
                <hr style={{ border: "0.5px solid", borderColor: palette.iub.line.default }} />
                <RenderBookUploader />
            </>
        
    )
}

export const RenderBookUploader = () => (
    <>
        <AuthorTitle sx={{mb: "3px"}}>
            Đăng tải bởi
        </AuthorTitle>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="16px">
            <Avatar alt="Remy Sharp" src="/images/book/ketoantaichinh.png" sx={{ width: '48px', height: "48px" }} />
            <Box>
                <AuthorName sx={{color: "iub.text.main"}}>Ths. Trình Minh</AuthorName>
                <AuthorEmail sx={{color: "iub.text.normal"}}>tranvancao@uih.edu.com</AuthorEmail>
            </Box>
        </Stack>
    </>
)

export const RenderControlButton = ({ sx, ...other }: StackProps) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <Stack direction="row" justifyContent="flex-start" spacing="18px" mt="20px" {...other}>
            <AddToCartBackdrop open={open}>
                <StyledButton
                    onClick={() => setOpen(open)}
                    label='Thêm vào giỏ hàng'
                    width={170}
                    bg='#4E49D6' />
            </AddToCartBackdrop>
            <StyledButton label='Mua với 56.000đ' width={170} bg='#F3633E' />
        </Stack>
    )
}


export const RenderBookBanner = () => {
    const router = useRouter()
    return (

        <Box sx={{
            display: { xs: "block", md: 'none' },
            width: "100%",
            backgroundColor: "pink",
            aspectRatio: "1/1",
            position: 'relative'
        }}>
            <Image
                src={ImgSRC}
                alt="book cover"
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%"
                }} />
            <IconContainer sx={{ top: "10px", left: "10px" }} onClick={() => router.back()}>
                <BackIcon />
            </IconContainer>
            <IconContainer sx={{ top: "10px", right: "10px" }} onClick={() => router.push("/auth/cart/")}>
                <CartIcon color="white" />
            </IconContainer>
        </Box>

    )
}

export const BookDetailsFooter = () => (
    <CenterHorizontalLayout
        sx={{
            flexGrow: 1,
            margin: "0",
            color: "#0D006A",
            display: { xs: "flex", md: "none" },
            position: "fixed",
            pb: "16px",
            backgroundColor: "white",
            boxShadow: "0px -2px 4px 0px rgba(145, 158, 171, 0.15)",
            bottom: 0,
            width: "100%",
            zIndex: 5
        }}>
        <RenderControlButton />
    </CenterHorizontalLayout>
)