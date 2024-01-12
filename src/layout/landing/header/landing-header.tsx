"use client"
import React, { useCallback, useState } from 'react'

import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useScrollPosition } from '@/hooks/use-ScrollPosition';
import MainLogo from '@/components/logo/main-logo'
import CenterHorizontalLayout from '@/layout/component-base-layout/center-horizontal-layout';
import ConfigHeader from './header-config';
import { HeaderLink } from '@/components/header/custom-component';
import StyledButton from '@/components/button/styled-button';
import SearchBar from '@/sections/home/components/intro/search-bar';
import ChangeThemeButton from '@/components/change-theme-button';
import CartButton from '@/components/cart-button';
import { useResponsive } from '@/hooks/use-responsive';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';


type HeaderData = {
    title: string,
    destination: string,
}


export default function LandingHeader({ sx, isResponsive, ...other }: BoxProps & { isResponsive?: boolean }) {
    const down1260px = useResponsive("down", 1260);
    const path = usePathname()
    const router = useRouter()
    const { navLink } = ConfigHeader();
    const [keyword, setKeyword] = useState<string>("");
    useCallback(() => useScrollPosition("header"), [])()

    const LinkWithBtn = (item: HeaderData) => (
        <CenterVerticalLayout gap="8px" sx={{ px: "10px", display: { xs: "none", md: "block" }, position: "relative" }}>
            <HeaderLink
                onClick={() => router.push(item.destination)}
                sx={{ display: "inline", cursor: "pointer", color: "iub.text.table_title", fontWeight: 600 }}>
                {item.title}
            </HeaderLink>
            {path === item.destination && <Box sx={{ width: "100%", height: "2px", backgroundColor: "#FE0000", mt: "5px" }}></Box>}
        </CenterVerticalLayout>
    )


    return (
        <Box id="header"
            sx={{
                borderBottom: "1px solid iub.line.headerBottom",
                backgroundColor: "iub.background.default",
                position: "sticky",
                zIndex: 20,
                height: "80px",
                ...sx,
                ...(isResponsive && { display: { xs: "none", md: "block" } })
            }}
            {...other}
        >
            <Container sx={{ px: "0 !important", mb: "16px", ...(down1260px && { px: "12px" }) }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box borderRadius="0px 0px 16px 16px" bgcolor="#0D006A" width="265px" py="26px">
                        <MainLogo isReverse />
                    </Box>

                    <CenterHorizontalLayout spacing="8px" width={1} alignItems="flex-start">
                        {navLink.map((item: HeaderData, index: number) => (
                            <LinkWithBtn {...item} key={index} />
                        ))}
                    </CenterHorizontalLayout>
                    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing="16px" width="265px" onClick={() => router.push("/auth/login")}>
                        <HeaderLink
                            onClick={() => router.push("/auth/register")}
                            sx={{ display: "inline", cursor: "pointer", color: "iub.text.light", fontWeight: 600 }}>
                            Đăng kí
                        </HeaderLink>
                        <StyledButton label='Đăng nhập' width={100} bg='#F3633E' />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
