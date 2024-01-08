"use client"
import React, { useMemo } from 'react'
import Container from '@mui/material/Container'
import CartTable from '../components/cart-table'
import Stack from '@mui/material/Stack'
import { CartSubTitle } from '../components/custom-component'
import Box from '@mui/material/Box'
import { useConvertCurrency } from '@/hooks/use-convert-currency'
import PricingBox from '../components/pricing-box'
import PaymentMethods from '../components/payment-methods'


export default function SubCartView() {
    const price = useMemo(() => useConvertCurrency(56000), [])
    return (
        <Container sx={{ backgroundColor: {xs:"iub.background.body",md:'iub.background.default'}, p:{xs:"35px 0",md:"35px"} , my: "30px", borderRadius: "16px", height: "auto" }}>
            <Box mb={{xs: "12px",md:"36px"}} mt="10px">
                <CartSubTitle sx={{color: "iub.text.light"}}>Danh sách mua</CartSubTitle>
                <CartTable />
            </Box>
            <Stack direction={{xs: "column", md:"row"}} justifyContent="space-between" alignItems="flex-start" spacing="20px">
                <PaymentMethods/>
                <PricingBox/>
            </Stack>
        </Container>
    )
}
