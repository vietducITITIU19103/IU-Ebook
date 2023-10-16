"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { CustomTabPanel, StyledTab, StyledTabs, MainLayout } from './custom-component';
import "./style.css"
import CarouselSection from '../carousel-section/carousel';

const book = {
    title: "Kế toán tài chính",
    type: "Kế toán",
    code: " MS 001",
    price: "65.000",
    download: "+3k",
    isBought: false,
    isFavorite: false,
    isRecommend: false
}


export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', borderRadius: "16px", border: "1px solid #D8DBDF", my: "36px"}}>
            <Box >
                <Box  sx={{ overflowX: "scroll"}} className="scroll">
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="styled tabs example"
                    >
                        <StyledTab label="Xem trước" />
                        <StyledTab label="Mô tả" />
                    </StyledTabs>
                </Box>
                <MainLayout>
                    <CustomTabPanel value={value} index={0}>
                       <CarouselSection/>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item two
                    </CustomTabPanel>
                </MainLayout>
            </Box>
        </Box>
    );
}