"use client"
import React from 'react'
import { Container, Stack, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { typography } from '@/theme/typography';
import { styled } from "@mui/material/styles"
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import { useResponsive } from '@/hooks/use-responsive'; 
import CommunityCarousel from '../_component/community-carousel';

const IconContainer = styled(CenterVerticalLayout)({
    borderRadius: "16px",
    border: "1.5px solid #D8DBDF",
    minWidth: "120px",
    minHeight: "100px",
    padding: "12px",
    marginBottom: '20px'
})

export default function CommunityView() {
    const mdDown = useResponsive("down", "md")
    return (
        <Container sx={{marginBottom: "100px"}}>
            <Stack
                direction={{ xs: "column-reverse", md: "row-reverse" }}
                alignItems="center"
                justifyItems="center"
                gap="50px"
               // height={{ xs: "auto", md: "calc(100vh - 70px)" }}
            >
                <Stack
                    width={{ xs: "100%", md: "400px", lg: "500px" }}
                    gap="16px"
                    alignItems={{ xs: "center", md:"flex-start" }}
                    //sx={{ transform: { xs: "scale(0.8)", sm: "scale(0.9)", md: "scale(0.85)", lg: "scale(1)" } }}
                >
                    <Typography
                        sx={{
                            color: '#FE0000',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            textAlign: 'left',
                            lineHeight: '107%',
                            fontFamily: typography.fontFamilySecondary,
                        }}
                    >
                        Cộng đồng
                    </Typography>
                    <Typography
                        component="h1"
                        sx={{
                            color: 'iub.text.table_title',
                            fontSize: '32px',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            textAlign: 'left',
                            lineHeight: '45px',
                            fontFamily: typography.fontFamily,
                        }}
                    >
                        SINH VIÊN NÓI GÌ VỀ CHÚNG TÔI?
                    </Typography>
                    <CommunityCarousel/>
                </Stack>
                <CenterVerticalLayout
                    position="relative"
                    width={{ xs: "100%", md: "calc(100% - 400px)" }}
                    // height={{ xs: "100%", md: "calc(100vh - 90px - 30px)" }}
                    minHeight={{ xs: "350px", sm: "400px", md: "500px", lg: "500px" }}
                >
                    <Image
                        src="/images/banner/community-banner.png"
                        alt="landing banner"
                        fill={true}
                        style={{ objectFit: "contain", objectPosition: mdDown ? "top" : "center" }}
                    />
                </CenterVerticalLayout>
            </Stack>
        </Container>
    )
}