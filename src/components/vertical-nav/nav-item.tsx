"use client"
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function NavItem({ item }: { item: { name: string, path: string, icon: any, activeIcon: any, isDisable: boolean } }) {
    const path = usePathname();
    const router = useRouter();
    return (
        <ListItemButton
            onClick={() => router.push("/dashboard/" + item.path)}
            key={item.path}
            sx={{
                p: "10px",
                pl: 0,
                color: path.includes(item.path) ?"#4E49D6":'#6C737F',
                backgroundColor: path.includes(item.path) ? "iub.background.nav_active" : "transparent",
                borderRadius: "12px",
                border: path.includes(item.path) ? "0.5px solid iub.background.line_active" : "none",
                "&:hover": {
                    ...(path.includes(item.path) && {backgroundColor:"white"}),
                },
                ...(item.isDisable && {cursor: "not-allowed"})
            }}
        >
            <ListItemIcon sx={{
                color: 'inherit',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px"
            }}>
                {path.includes(item.path) ? item.activeIcon : item.icon}
            </ListItemIcon>
            <ListItemText
                primary={item.name}
                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
            />
        </ListItemButton>
    )
}
