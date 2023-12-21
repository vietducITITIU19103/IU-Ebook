"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import { AuthorName, AuthorEmail } from '@/sections/book/components/custom-component';
import Public from '@mui/icons-material/Public';
import Typography from '@mui/material/Typography';
import NavConfig from './nav-config';
import { usePathname } from 'next/navigation';
import NavItem from './nav-item';

const data = [
    { icon: <People />, label: 'Authentication' },
    { icon: <Dns />, label: 'Database' },
    { icon: <PermMedia />, label: 'Storage' },
    { icon: <Public />, label: 'Hosting' },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
    '& .MuiListItemButton-root': {
        paddingLeft: 15,
        paddingRight: 15,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

export default function VerticalNavbar() {
    const path = usePathname()
    const { mainLink, subList } = NavConfig()
    return (
        <Box sx={{ display: {xs:"none", md:'flex'}, height: "calc(100vh - 103px)" }}>
            <Paper elevation={0} sx={{ width: "256px", backgroundColor: "transparent" }}>
                <FireNav component="nav" disablePadding>
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="16px" sx={{ padding: "13px 11px" }}>
                        <Avatar alt="Remy Sharp" src="/images/book/ketoantaichinh.png" sx={{ width: '54px', height: "54px" }} />
                        <Box>
                            <Typography sx={{
                                fontSize: "17px",
                                fontWeight: 700,
                                lineHeight: "normal",
                                Color: "#1F2A37",
                                mb: "4px"
                            }}>
                                Nguyễn Văn Anh
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    lineHeight: "normal",
                                    Color: "#9DA4AE"
                                }}>
                                Sinh viên
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ my: "24px" }} spacing="8px">
                        {mainLink.map((item, index) => (
                            <NavItem item={item} key={index}/>
                        ))}
                        <Divider/>
                        {subList.map((item, index) => (
                            <NavItem item={item} key={index}/>
                        ))}
                    </Stack>
                </FireNav>
            </Paper>
        </Box>
    );
}