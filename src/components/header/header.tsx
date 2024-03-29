"use client"
import React, { useCallback, useState } from 'react'

import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useScrollPosition } from '@/hooks/use-ScrollPosition';
import MainLogo from '@/components/logo/main-logo'
import CenterHorizontalLayout from '../../layout/component-base-layout/center-horizontal-layout';
import ConfigHeader from './header-config';
import { HeaderLink } from './custom-component';
import StyledButton from '../button/styled-button';
import SearchBar from '@/sections/home/components/intro/search-bar';
import ChangeThemeButton from '../change-theme-button';
import CartButton from '../cart-button';
import { useResponsive } from '@/hooks/use-responsive';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';


type HeaderData = {
    title: string,
    destination: string,
    icon: React.ReactNode,
    iconActive: React.ReactNode,

}


export default function Header({ sx, isResponsive, ...other }: BoxProps & { isResponsive?: boolean }) {
    const down1260px = useResponsive("down", 1260);
    const path = usePathname()
    const router = useRouter()
    const { navLink } = ConfigHeader();
    const [keyword, setKeyword] = useState<string>("");
    useCallback(() => useScrollPosition("header"), [])()

    const LinkWithBtn = (item: HeaderData) => (
        <CenterHorizontalLayout spacing="8px" sx={{ px: "10px", display: { xs: "none", md: "block" } }}>
            {path === item.destination ? item.iconActive : item.icon}
            <HeaderLink
                onClick={() => router.push(item.destination)}
                sx={{ display: "inline", cursor: "pointer", color: "iub.text.normal", ...(path === item.destination && { color: 'iub.text.active', fontWeight: 600 }) }}>
                {item.title}
            </HeaderLink>
        </CenterHorizontalLayout>
    )


    return (
        <Box id="header"
            sx={{
                borderBottom: "1px solid iub.line.headerBottom",
                backgroundColor: "iub.background.default",
                position: "sticky",
                zIndex: 20,
                ...sx,
                ...(isResponsive && { display: { xs: "none", md: "block" } })
            }}
            {...other}
        >
            <Container sx={{ px: "0 !important", my: "16px", ...(down1260px && { px: "12px" }) }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box sx={{ display: { xs: "none", md: "flex" } }}><MainLogo /></Box>
                    <CenterHorizontalLayout spacing="8px" justifyContent="flex-end" sx={{ width: '100%' }}>
                        <SearchBar value={keyword} changeValue={setKeyword}/>
                        <Box sx={{ display: { xs: "none", md: "flex" } }} onClick={() => router.push("/search?q="+keyword)}>
                            <StyledButton label='Search' width={100} bg='#F3633E' />
                        </Box>

                        {navLink.map((item: HeaderData, index: number) => (
                            <LinkWithBtn {...item} key={index} />
                        ))}
                        <CenterHorizontalLayout spacing="16px" pl={{ xs: "8px", md: 0 }}>
                            <ChangeThemeButton />
                            <Box sx={{ width: "1px", height: "22px", backgroundColor: "#D8DBDF" }} />
                            <CartButton num={40} />
                        </CenterHorizontalLayout>
                    </CenterHorizontalLayout>
                </Stack>
            </Container>
        </Box>
    )
}
