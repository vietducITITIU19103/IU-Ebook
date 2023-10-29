"use client"
import React from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import BackArrowIcon from '@/assets/icons/arrow/back-arrow-icon';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MainLogo from '@/components/logo/main-logo'
import CenterHorizontalLayout from '../../layout/component-base-layout/center-horizontal-layout';
import ConfigHeader from './header-config';
import { HeaderLink } from './custom-component';
import StyledButton from '../button/styled-button';
import SearchBar from '@/sections/home/components/intro/search-bar';
import ChangeThemeButton from '../change-theme-button';
import CartButton from '../cart-button';
import { useResponsive } from '@/hooks/use-responsive';
import { useRouter } from 'next/navigation'


export default function CartHeader() {
    const router = useRouter()
    return (
        <Box sx={{ borderBottom: "1px solid #F2F4F7", backgroundColor: "white", py:"12px" }}>
            <Container sx={{px: "12px !important"}}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <IconButton onClick={()=>router.back()}>
                        <BackArrowIcon />
                    </IconButton>
                    <Typography sx={{
                        color: "#4E49D6",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "-0.4px"
                    }}>
                        Giỏ hàng
                    </Typography>
                    <Box sx={{width: "39px"}}></Box>
                </Stack>
            </Container>
        </Box>
    )
}
