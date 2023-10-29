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
import MomoLogo from "@/assets/images/momo.png"
import ZaloLogo from "@/assets/images/zalo.png"
import VisaLogo from "@/assets/images/visa.png"
import Image from 'next/image'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const PaymentItem = (src: any, name: string, value: string) => (
    <Stack spacing="8px" direction="row" justifyContent="flex-start" alignItems="center"
        sx={{
            width: "100%",
            height: "54px",
            padding: "16px 24px 16px 16px",
            borderRadius: "12px",
            border: "1px solid #4E49D6",
            background: "#FFF"
        }}>
        <FormControlLabel value={value} control={<Radio />} label="" />
        <Image src={src} width={36} height={36} alt="logo"></Image>
        <CartDescription>{name}</CartDescription>
    </Stack>
)

const CardItem = (src: any, name: string, value: string, cardNumber: string) => (
    <Stack spacing="8px" direction="row" justifyContent="flex-start" alignItems="center"
        sx={{
            width: "100%",
            height: "54px",
            padding: "16px 24px 16px 16px",
            borderRadius: "12px",
            border: "1px solid #4E49D6",
            background: "#FFF"
        }}>
        <FormControlLabel value={value} control={<Radio />} label="" />
        <Image src={src} width={36} height={36} alt="logo"></Image>
        <Stack>
        <CartDescription>{name}</CartDescription>
        <CartDescription sx={{color: "#767676", fontSize: "12px"}}>{cardNumber}</CartDescription>
        </Stack>
    </Stack>
)

export default function PaymentMethods() {
    return (
        <Box sx={{ width: "100%", maxWidth: "560px" }}>
            <CartSubTitle>Phương thức thanh toán</CartSubTitle>
            <Stack>

                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{ display: "flex", direction: "column", gap: "18px" }}
                    >

                        {PaymentItem(MomoLogo,"Momo","momo")}
                        {PaymentItem(ZaloLogo,"Zalopay","zalo")}
                        {CardItem(VisaLogo,"VISA","visa","**** **** **** 1234")}
                    </RadioGroup>
                </FormControl>
            </Stack>
        </Box>
    )
}


