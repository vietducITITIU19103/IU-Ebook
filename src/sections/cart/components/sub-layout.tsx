import React from 'react'
import RecommendBookList from "../components/recommend-book"
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import "../../book/components/book-tabs/style.css"
import Image from 'next/image'
import StyledButton from '@/components/button/styled-button'
import imgSRC from "@/assets/images/cart-image.png"
import { CartTitle, CartDescription } from '../components/custom-component'

export default function SubLayout({ children, src, direction, width }: { children: React.ReactNode, src: any, direction: any, width: number }) {
    return (
        <Container>
            <Stack direction={direction} justifyContent="center" alignItems="center" sx={{ mt: "86px", mb: "50px" }} spacing="24px">
                <Stack maxWidth={{ xs: "100%", md: width + "px" }} alignItems={{ xs: "center", md: "flex-start" }}>
                    {children}
                </Stack>
                <Image src={src} alt="empty cart illustration" style={{ width: "480px", height: 'auto' }} />
            </Stack>
            <RecommendBookList />
        </Container>
    )
}
