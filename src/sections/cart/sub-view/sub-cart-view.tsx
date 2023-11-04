"use client"
import React, { useMemo } from 'react'
import Container from '@mui/material/Container'
import CartTable from '../components/cart-table'
import Stack from '@mui/material/Stack'
import { CartSubTitle, CartTitle, CartDescription, CartInfo, CartPrice } from '../components/custom-component'
import Box from '@mui/material/Box'
import StyledButton from '@/components/button/styled-button'
import { useConvertCurrency } from '@/hooks/use-convert-currency'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DiscountIcon from '@/assets/icons/book/discount-icon'
import PricingBox from '../components/pricing-box'
import PaymentMethods from '../components/payment-methods'


export default function SubCartView() {
    const price = useMemo(() => useConvertCurrency(56000), [])
    return (
        <Container sx={{ backgroundColor: 'white', p: "35px", my: "30px", borderRadius: "16px", height: "auto" }}>
            <Box mb="36px">
                <CartSubTitle>Danh sách mua</CartSubTitle>
                <CartTable />
            </Box>
            <Stack direction={{xs: "column", md:"row"}} justifyContent="space-between" alignItems="flex-start" spacing="20px">
                <PaymentMethods/>
                <PricingBox/>
            </Stack>
        </Container>
    )
}
