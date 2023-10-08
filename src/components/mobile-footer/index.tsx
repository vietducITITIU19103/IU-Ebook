"use client"
import React from 'react'
import Stack from '@mui/material/Stack';
import Item from './item';
import LibIcon from '@/assets/icons/footer/lib-icon';
import HomeIcon from '@/assets/icons/header/home-icon';
import DocumentIcon from '@/assets/icons/footer/document-icon';
import SaleIcon from '@/assets/icons/footer/sale-icon';
import UserIcon from '@/assets/icons/header/user-icon';
import Box from '@mui/material/Box';
import { useResponsive } from '@/hooks/use-responsive';

export default function BottomNavBar() {
    const down410px = useResponsive("down",410)
    const boxStyle = {
        flexGrow: 1,
        margin: "0",
        color: "#0D006A",
        // display: { xs: "flex", md: "none" },
        position: "fixed",
        backgroundColor: "white", 
        boxShadow: "0px -2px 4px 0px rgba(145, 158, 171, 0.15)",
        bottom: 0,
        width: "100%",
        zIndex: 5
    }
    return (
        <Box sx={boxStyle}>
            <Stack
                direction="row"
                spacing={2}
                justifyContent={down410px?"space-around":{xs:"space-between",sm:"space-around",md:"space-between"}}
                alignItems="center"
                sx={{
                    padding: "0 16px",
                    m: 0,
                    width: "100%",
                }}>
                <Item title="Trang chủ" isActive isHidden={down410px}>
                    <HomeIcon sx={{width: "23px", height: "23px"}}/>
                </Item>
                <Item title="Thư viện" isHidden={down410px}>
                    <LibIcon sx={{width: "28px", height: "23px"}}/>
                </Item>
                <Item title="Tài liệu" isHidden={down410px}>
                    <DocumentIcon sx={{width: "22px", height: "24px"}}/>
                </Item>
                <Item title="Khuyến mãi" isHidden={down410px}>
                    <SaleIcon sx={{width: "28px", height: "23px"}}/>
                </Item>
                <Item title="Tài khoản" isHidden={down410px}>
                    <UserIcon sx={{width: "18px", height: "23px"}} />
                </Item>
            </Stack>
        </Box >
    )
}
