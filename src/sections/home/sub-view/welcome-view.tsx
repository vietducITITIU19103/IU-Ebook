import React from 'react'
import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import Container from '@mui/system/Container'

import Customchip from '@/components/chip/custom-chip'
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout'
import CenterHorizontalLayout from '@/layout/component-base-layout/center-horizontal-layout';
import TitleWithBg from '../components/intro/title-with-bg';
import ButtonOutlined from '@/components/button/button-outlined';
import TrialIcon from '@/assets/icons/button/trial-icon';

import { MainTitle, TextDescription } from '../components/_common/custom-component';
import IllustrateImage1 from "@/assets/images/monthly-recurring-revenue.png"



export default function WelcomeView() {
    return (
        <Container sx={{ px: "0 !important", my: "28px", position: "relative" }}>
            <CenterVerticalLayout spacing="24px">
                <Customchip label="Phân tích dữ liệu" />
                <MainTitle
                    component="h1"
                >
                    Mở khóa toàn bộ
                    <br />
                    <Stack direction="row">Tiềm năng {" "} <TitleWithBg /></Stack>
                </MainTitle>
                <TextDescription
                    sx={{
                        maxWidth: "664px",
                        textAlign: "center",
                        pt: "6px",
                        pb: "32px"
                    }}>
                    Giải phóng toàn bộ tiềm năng của phân tích dữ liệu nhanh chóng: Trao quyền cho việc ra quyết định kịp thời và thúc đẩy hoạt động kinh doanh xuất sắc</TextDescription>
                <ButtonOutlined width='173px' height='60px'>
                    <CenterHorizontalLayout spacing="17px">
                        <TrialIcon sx={{ width: "24px", height: "24px" }} />
                        <Typography>Dùng thử</Typography>
                    </CenterHorizontalLayout>
                </ButtonOutlined>
            </CenterVerticalLayout>
                    <Image src={IllustrateImage1} alt="Illustrate image" style={{width: "220px", height: "auto", position: "absolute", top: "-15px", left: "25px"}}></Image>

        </Container>
    )
}
