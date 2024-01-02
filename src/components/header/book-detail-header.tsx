"use client"
import React, { useCallback } from 'react'

import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import SearchBar from '@/sections/home/components/intro/search-bar';
import { useResponsive } from '@/hooks/use-responsive';
import { IconButton } from '@mui/material';
import CartIcon from '@/assets/icons/header/cart-icon';
import BackArrowIcon from '@/assets/icons/arrow/back-arrow-icon';
import { useScrollToShow } from '@/hooks/use-ScrollPosition';
import { useRouter } from 'next/navigation';


export default function BookDetailHeader({ sx, ...other }: BoxProps) {
    const down1260px = useResponsive("down", 1260);
    const router = useRouter()
    useCallback(() => useScrollToShow("book-detail-header"), [])()

    return (
        <Box id="book-detail-header" sx={{ width: "100%", borderBottom: "1px solid iub.line.headerBottom", backgroundColor: "iub.background.default", position: "fixed", zIndex: 20, ...sx }} {...other}>
            <Container sx={{ px: "0 !important", my: "16px", ...(down1260px && { px: "12px" }) }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <IconButton
                        onClick={() => router.back()}
                        sx={{ position: "relative", top: "-1px", right: "10px" }}
                    >
                        <BackArrowIcon color="#4E49D6" />
                    </IconButton>
                    <SearchBar />
                    <IconButton
                        onClick={() => router.push("/auth/cart/")}
                        sx={{ position: "relative", top: "-1px", right: "-10px" }}
                    >
                        <CartIcon color="#4E49D6" />
                    </IconButton>
                </Stack>
            </Container>
        </Box>
    )
}
