import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from "@mui/material/Link"
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ThemeContext } from '@/theme';

export default function SectionHeader({ chipContent, title, hasTitle }: { chipContent?: string, title: string, hasTitle?: boolean }) {
    const { palette: { iub } } = useContext(ThemeContext)
    return (
        <Stack
            direction="row"
            justifyContent={!hasTitle ? "space-between" : "flex-end"}
            sx={{
                marginBottom: "16px",
                position: "relative",
                zIndex: 1,
                width: "100%",
                color: "iub.text.active"
            }}>
            {!hasTitle && <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: "18px",
                        color: "inherit",
                        fontWeight: "bold",
                        fontFamily: "inherit"
                    }}>
                    {title}
                </Typography>
                {chipContent && <Chip
                    label={chipContent}
                    size="small"
                    sx={{
                        backgroundColor: "iub.background.chip",
                        color: "inherit",
                        display: {
                            xs: "none", sm: "flex"
                        }
                    }} />
                }
            </Stack>}
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
                sx={{
                    cursor: "pointer",
                    paddingRight: { xs: "16px", md: "16px", lg: "30px" },
                    "&:hover>#view-all": {
                        color: "iub.text.active",
                    },
                    "&:hover>span>svg>path": {
                        stroke: iub.text.active,
                    },
                }}
            >
                <Link
                    id="view-all"
                    href=""
                    sx={{
                        textDecoration: "none",
                        color: "iub.text.light",
                        fontSize: "12px",
                        fontWeight: 500,
                        // "&:hover": {
                        //     color: "iub.text.active",
                        // }
                    }}>Xem tất cả</Link>
                <span>
                    <Box
                        component="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 16" fill="none"
                        sx={{
                            width: "21px",
                            height: "21px",
                        }}>
                        <path d="M8.19922 5.5L13.1992 10.5L8.19922 15.5" stroke={iub.text.light} strokeLinecap="round" strokeLinejoin="round" id="arrow"/>
                    </Box>
                </span>
            </Stack>
        </Stack>
    )
}
