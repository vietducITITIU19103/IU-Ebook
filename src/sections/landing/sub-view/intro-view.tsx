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

const IconContainer = styled(CenterVerticalLayout)({
    borderRadius: "16px",
    border: "1.5px solid #D8DBDF",
    minWidth: "120px",
    minHeight: "100px",
    padding: "12px",
    marginBottom: '20px'
})

export default function IntroView() {
    return (
        <Container>
            <Stack direction="row" alignItems="center">
                <Stack width="400px" gap="16px">
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
                            <Typography sx={{color: 'iub.text.table_title'}}>Tài liệu uy tín</Typography>
                        </IconContainer>
                        <IconContainer>
                            <Icon2 />
                            <Typography sx={{color: 'iub.text.table_title'}}>Giá cả hợp lí</Typography>
                        </IconContainer>
                        <IconContainer>
                            <Icon3 />
                            <Typography sx={{color: 'iub.text.table_title'}}>+100k lượt tải</Typography>
                        </IconContainer>
                    </Stack>
                    <StyledButton label='Khám phá ngay' width={170} bg='#4E49D6' />
                </Stack>
                <CenterVerticalLayout position="relative" width="calc(100% - 400px)" height="calc(100vh - 90px - 30px)">
                    <Image src="/images/banner/landing-banner.svg" alt="landing banner" fill={true} />
                </CenterVerticalLayout>
            </Stack>
        </Container>
    )
}
