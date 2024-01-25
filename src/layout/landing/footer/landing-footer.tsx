"use client"
import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
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
                my: "16px",
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
                <Grid xs={12} md={2}>
                    <Stack direction="row" justifyContent="flex-start" sx={{ mt: "16px", ml: {xs: "16px", md: "0"}, mb: {xs: "16px", md: "0"} }}>
                        <MainLogo isReverse />
                    </Stack>
                </Grid>
                <Grid xs={12} sm={6} md={3.5} lg={3}>
                    <Info isLanding />
                </Grid>
                <Grid xs={12} sm={6} md={2} lg={2.5} >
                    <NavList isLanding />
                </Grid>
                <Grid xs={12} sm={6} md={2.5}>
                    <Payment isLanding />
                </Grid>
                <Grid xs={12} sm={6} md={2}>
                    <Stack direction="row" justifyContent={{xs: "flex-start", md: "flex-end"}}>
                        <DownLoad isLanding />
                    </Stack>
                </Grid>
                <Grid xs={12}>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: "center",
                            color: "iub.text.paper",
                            fontFamily: typography.interFont
                        }}>
                        Copyright © 2023 IUH University Viet Nam
                    </Typography>
                </Grid>
            </Grid>
        </Container >
    )
}




