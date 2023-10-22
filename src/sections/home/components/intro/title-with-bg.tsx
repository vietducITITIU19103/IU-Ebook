import React from 'react'
import Box from '@mui/material/Box';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import TitleBg from '@/assets/icons/text-bg/title-bg';
import { MainTitle } from '../_common/custom-component';

export default function TitleWithBg() {
    return (
        <Box sx={{width: "485px", ml: "7px"}}>
            <CenterVerticalLayout sx={{ position: "relative"}}>
                <MainTitle sx={{
                    color: "#006B5B",
                }}>
                    Data Analysis
                </MainTitle>
                <Box sx={{ position: "absolute", zIndex: -1, top: "0" }}>
                    <TitleBg sx={{ width: "485px", height: "90px" }} />
                </Box>
            </CenterVerticalLayout>
        </Box>
    )
}
