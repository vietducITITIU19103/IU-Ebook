"use client"
import React from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import MainLogo from '@/components/logo/main-logo'
import CenterHorizontalLayout from '../../layout/component-base-layout/center-horizontal-layout';
import ConfigHeader from './header-config';
import { HeaderLink } from './custom-component';
import StyledButton from '../button/styled-button';
import SearchBar from '@/sections/home/components/intro/search-bar';
import ChangeThemeButton from '../change-theme-button';
import CartButton from '../cart-button';
import { useResponsive } from '@/hooks/use-responsive';

type HeaderData = {
    title: string, destination: string, icon: React.ReactNode
}

const LinkWithBtn = (item: HeaderData) => (
    <CenterHorizontalLayout spacing="8px" sx={{ px: "10px", display: { xs: "none", md: "block" } }}>
        {item.icon}
        <HeaderLink component="a" href={item.destination}>{item.title}</HeaderLink>
    </CenterHorizontalLayout>
)

export default function Header() {
    const down1260px = useResponsive("down", 1260);
    const { navLink, signIn } = ConfigHeader();

    return (
        <Box sx={{ borderBottom: "1px solid #F2F4F7", backgroundColor: "white" }}>
            <Container sx={{ px: "0 !important", my: "16px", ...(down1260px && { px: "12px" }) }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box sx={{ display: { xs: "none", md: "flex" } }}><MainLogo /></Box>
                    <CenterHorizontalLayout spacing="8px" justifyContent="flex-end" sx={{ width: '100%' }}>
                        <SearchBar />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <StyledButton label='Search' width={100} bg='#F3633E' />
                        </Box>

                        {navLink.map((item: HeaderData, index: number) => (
                            <LinkWithBtn {...item} key={index}/>
                        ))}
                        <CenterHorizontalLayout spacing="16px" pl={{ xs: "8px", md: 0 }}>
                            <ChangeThemeButton />
                            <Box sx={{ width: "1px", height: "22px", backgroundColor: "#D8DBDF" }} />
                            <CartButton num={40} /></CenterHorizontalLayout>
                    </CenterHorizontalLayout>
                </Stack>
            </Container>
        </Box>
    )
}
