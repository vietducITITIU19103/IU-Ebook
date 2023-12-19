"use client"
import React from 'react'
import Stack from '@mui/material/Stack';
import Item from './item';
import Box from '@mui/material/Box';
import { useResponsive } from '@/hooks/use-responsive';
import MobileFooterConfig from './mobile-footer-config';
import { usePathname, useRouter } from 'next/navigation';

export default function BottomNavBar() {
    const data = MobileFooterConfig()
    const currentPath = usePathname();
    const router = useRouter();
    const down410px = useResponsive("down", 410)
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
                justifyContent={down410px ? "space-around" : { xs: "space-between", sm: "space-around", md: "space-between" }}
                alignItems="center"
                sx={{
                    padding: "0 16px",
                    m: 0,
                    width: "100%",
                }}>
                {data.map(({ name, path, icon, activeIcon }: { name: string, path: string, icon: any, activeIcon: any }, index: number) => (
                    <React.Fragment key={index}>{
                        path !== "/" ?
                            <Item
                                key={index}
                                title={name}
                                isActive={currentPath.includes(path)}
                                isHidden={down410px}
                                onClick={()=>router.push(`${path}`)}
                            >
                                {currentPath.includes(path) ? activeIcon : icon}
                            </Item>
                            :
                            <Item
                            onClick={()=>router.push(`${path}`)}
                                key={index}
                                title={name}
                                isActive={
                                    !currentPath.includes("search") &&
                                    !currentPath.includes("dashboard")}
                                isHidden={down410px}>
                                {!currentPath.includes("search") &&
                                    !currentPath.includes("dashboard") ? activeIcon : icon}
                            </Item>
                    }</React.Fragment>
                ))}
            </Stack>
        </Box >
    )
}
