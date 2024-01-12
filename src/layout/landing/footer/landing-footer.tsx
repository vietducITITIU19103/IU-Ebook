"use client"
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import NavList from '@/components/footer/nav-list';
import Info from '@/components/footer/info';
import Payment from '@/components/footer/payment';
import DownLoad from '@/components/footer/download';
import MainLogo from '@/components/logo/main-logo';
import { typography } from '@/theme/typography';

export default function LandingFooter() {
    return (
        <Container
            sx={{
                flexGrow: 1,
                // margin: "16px",
                color: "iub.text.footer",
                p: "0 !important",
                backgroundColor: "#0D006A" 
            }}>
            <Grid container
                sx={{
                    fontSize: {
                        sx: "16px",
                        lg: "18px"
                    }
                }}>
                <Grid xs={2} >
                    <Stack direction="row" justifyContent="flex-start">
                        <MainLogo />
                    </Stack>
                </Grid>
                <Grid xs={3.5} lg={3}>
                    <Info />
                </Grid>
                <Grid xs={2} lg={2.5} >
                    <NavList />
                </Grid>
                <Grid xs={2.5} >
                    <Payment />
                </Grid>
                <Grid xs={2}>
                    <Stack direction="row" justifyContent="flex-end">
                        <DownLoad />
                    </Stack>
                </Grid>
                <Grid xs={12}>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: "center",
                            color: "iub.text.light",
                            fontFamily: typography.interFont
                        }}>
                        Copyright © 2023 IUH University Viet Nam
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}




