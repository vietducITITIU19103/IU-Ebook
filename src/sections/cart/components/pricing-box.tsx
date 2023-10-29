"use client"
import React, { useMemo } from 'react'
import Stack from '@mui/material/Stack'
import { CartSubTitle, CartInfo, CartPrice } from '../components/custom-component'
import Box from '@mui/material/Box'
import StyledButton from '@/components/button/styled-button'
import { useConvertCurrency } from '@/hooks/use-convert-currency'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DiscountIcon from '@/assets/icons/book/discount-icon'

export default function PricingBox() {
    const price = useMemo(() => useConvertCurrency(56000), [])
    return (
        <Box>
            <CartSubTitle>Thành tiền</CartSubTitle>
            <Box
                sx={{
                    width: "560px",
                    px: "16px",
                    py: "24px",
                    borderRadius: "16px",
                    border: "1px solid #F3633E",
                    backgroundColor: "#FFF7F5",
                    mb: "24px"
                }}>
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing="16px">
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="8px">
                        <CartSubTitle>Tạm tính</CartSubTitle>
                        <CartSubTitle sx={{ fontWeight: 700 }}>{price}{" "}<span style={{ textDecoration: "underline" }}>đ</span></CartSubTitle>
                    </Stack>
                    <Box sx={{ width: "100%" }}>
                        <CartSubTitle sx={{ fontWeight: 800, mb: "12px" }}>Mã khuyến mãi</CartSubTitle>
                        <TextField
                            fullWidth
                            size='small'
                            id="standard-start-adornment"
                            sx={{ backgroundColor: "white" }}
                            placeholder='Nhập mã khuyến mãi'
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><DiscountIcon /></InputAdornment>,
                            }}
                            variant="outlined"
                        />
                    </Box>
                </Stack>
                <hr style={{ margin: "16px 0", border: "0.7px solid #F3633E" }}></hr>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="12px">
                        <CartInfo>Tổng tiền</CartInfo>
                        <CartPrice>{price}{" "}<span style={{ textDecoration: "underline" }}>đ</span></CartPrice>
                    </Stack>
                    <StyledButton label='Mua ngay' bg='#4E49D6' width={170} />
                </Stack>
            </Box>
        </Box>
    )
}
