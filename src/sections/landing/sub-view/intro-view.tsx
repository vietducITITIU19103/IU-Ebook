"use client"
import React from 'react'
import { Container, Stack, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { typography } from '@/theme/typography';
import StyledButton from '@/components/button/styled-button';
import { styled } from "@mui/material/styles"
import Icon1 from '@/assets/icons/landing-illustrate/icon-1';
import Icon2 from '@/assets/icons/landing-illustrate/icon-2';
import Icon3 from '@/assets/icons/landing-illustrate/icon-3';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import { useResponsive } from '@/hooks/use-responsive'; 

const IconContainer = styled(CenterVerticalLayout)({
    borderRadius: "16px",
    border: "1.5px solid #D8DBDF",
    minWidth: "120px",
    minHeight: "100px",
    padding: "12px",
    marginBottom: '20px'
})

export default function IntroView() {
    const mdDown = useResponsive("down", "md")
    return (
        <Container>
            <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                gap="20px"
                height={{ xs: "auto", md: "calc(100vh - 70px)" }}
            >
                <Stack
                    width={{ xs: "100%", md: "340px", lg: "400px" }}
                    gap="16px"
                    alignItems="flex-start"
                    sx={{ transform: { xs: "scale(0.8)", sm: "scale(0.9)", md: "scale(0.85)", lg: "scale(1)" } }}
                >
                    <Typography
                        sx={{
                            color: '#FE0000',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            textAlign: 'left',
                            lineHeight: '107%',
                            fontFamily: typography.fontFamilySecondary,
                        }}
                    >
                        Kho tài liệu
                    </Typography>
                    <Typography
                        component="h1"
                        sx={{
                            color: 'iub.text.table_title',
                            fontSize: '64px',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            textAlign: 'left',
                            lineHeight: '70px',
                            fontFamily: typography.fontFamily,
                        }}
                    >
                        THẮP SÁNG <br />TƯƠNG LAI
                    </Typography>
                    <Typography
                        component="h1"
                        sx={{
                            color: 'iub.text.light',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            textAlign: 'left',
                            lineHeight: '25px',
                            fontFamily: typography.fontFamilySecondary,
                        }}
                    >
                        Tham gia ngay với chúng tôi để có trong tay những bộ tài liệu mới nhất từ giảng viên
                    </Typography>
                    <Stack direction="row" gap="12px" width={1}>
                        <IconContainer>
                            <Icon1 />
                            <Typography sx={{ color: 'iub.text.table_title' }}>Tài liệu uy tín</Typography>
                        </IconContainer>
                        <IconContainer>
                            <Icon2 />
                            <Typography sx={{ color: 'iub.text.table_title' }}>Giá cả hợp lí</Typography>
                        </IconContainer>
                        <IconContainer>
                            <Icon3 />
                            <Typography sx={{ color: 'iub.text.table_title' }}>+100k lượt tải</Typography>
                        </IconContainer>
                    </Stack>
                    <StyledButton label='Khám phá ngay' width={170} bg='#4E49D6' />
                </Stack>
                <CenterVerticalLayout
                    position="relative"
                    width={{ xs: "100%", md: "calc(100% - 400px)" }}
                    height={{ xs: "100%", md: "calc(100vh - 90px - 30px)" }}
                    minHeight={{ xs: "400px", sm: "600px", md: "700px", lg: "calc(100vh - 90px - 30px)" }}
                >
                    <Image
                        src="/images/banner/landing-banner-light.png"
                        alt="landing banner"
                        fill={true}
                        style={{ objectFit: "contain", objectPosition: mdDown ? "top" : "center" }}
                    />
                </CenterVerticalLayout>
            </Stack>
        </Container>
    )
}
