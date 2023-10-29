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
import SubLayout from '../components/sub-layout'

export default function CartEmptyView() {
    return (
        <SubLayout src={imgSRC} direction={{xs:"column",md:"row"}} width={285}>
            <CartTitle sx={{ mb: "5px" }}>
                Ôi, bạn chưa có tài liệu nào trong giỏ hàng cả!
            </CartTitle>
            <CartDescription
                sx={{ mb: "16px" }}>
                Hãy xem thử kho tài liệu tại thư viện của chúng tôi bạn nhé!
            </CartDescription>
            <StyledButton label='Quay lại thư viện' bg='#4E49D6' width={170} />
        </SubLayout>
    )
}
