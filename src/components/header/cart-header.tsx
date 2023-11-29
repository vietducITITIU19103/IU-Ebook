"use client"
import React from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import BackArrowIcon from '@/assets/icons/arrow/back-arrow-icon';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation'
import CheckIcon from '@/assets/icons/header/check-icon';


export default function CartHeader({ title, isHandleLogic, handleBack, isHandleBack,...other }: IconButtonProps & { title: string, isHandleLogic?: boolean, isHandleBack?: boolean,handleBack?: VoidFunction }) {
    const router = useRouter()
    return (
        <Box sx={{ borderBottom: "1px solid #F2F4F7", backgroundColor: "white", py: "12px", display: { xs: "block", md: "none" }, position: "fixed", width: "100%" }}>
            <Container sx={{ px: "12px !important" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <IconButton onClick={() => handleBack ? handleBack() : alert("bb")}>
                        <BackArrowIcon />
                    </IconButton>
                    <Typography sx={{
                        color: "#4E49D6",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "-0.4px",
                        fontFamily: "inherit"
                    }}>
                        {title}
                    </Typography>
                    {isHandleLogic ?
                        <IconButton sx={{ width: "39px", height: "39px" }} {...other}><CheckIcon /></IconButton>
                        :
                        <Box sx={{ width: "39px", height: "39px" }}/>
                }
                </Stack>
            </Container>
        </Box>
    )
}
