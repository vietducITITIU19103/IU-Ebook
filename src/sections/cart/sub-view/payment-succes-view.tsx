"use client"
import React, { useMemo } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import "../../book/components/book-tabs/style.css"
import Image from 'next/image'
import StyledButton from '@/components/button/styled-button'
import imgSRC from "@/assets/images/payment-success.png"
import { CartTitle, CartDescription, CartInfo, CartPrice } from '../components/custom-component'
import SubLayout from '../components/sub-layout'
import MomoLogo from "@/assets/images/momo.png"
import { useConvertCurrency } from '@/hooks/use-convert-currency'
import { useRouter } from 'next/navigation'

export default function PaymentSuccesView({totalPrice}: {totalPrice: number}) {
    const price = useMemo(()=>useConvertCurrency(totalPrice),[totalPrice])
    const router = useRouter()
    return (
        <SubLayout src={imgSRC} direction={{ xs: "column", md: "row-reverse" }} width={405}>
            <CartTitle sx={{ mb: "5px" }}>
                Yay, bạn đã thanh toán thành công!
            </CartTitle>
            <CartDescription
                sx={{ mb: "24px" }}>
                Chúc bạn sử dụng tài liệu hiệu quả và đạt kết quả tốt nhất trong kì thi
            </CartDescription>
            <Box
                sx={{
                    width: "270px",
                    px: "16px",
                    py: "24px",
                    borderRadius: "16px",
                    border: "1px solid #F3633E",
                    backgroundColor: "#FFF7F5",
                    mb: "24px"
                }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <CartInfo>Phương thức thanh toán</CartInfo>
                    <Image src={MomoLogo} width={36} height={36} alt="logo"></Image>
                </Stack>
                <hr style={{ margin: "16px 0", border: "0.7px solid #F3633E" }}></hr>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <CartInfo>Tổng tiền</CartInfo>
                    <CartPrice>{price}{" "}<span style={{textDecoration: "underline"}}>đ</span></CartPrice>
                </Stack>
            </Box>
            <StyledButton label='Quay lại thư viện' bg='#4E49D6' width={170} onClick={()=>router.push("/search")}/>
        </SubLayout>
    )
}