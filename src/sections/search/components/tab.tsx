"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import StyledButton from '@/components/button/styled-button';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import { CustomTabPanel, StyledTab, StyledTabs, MainLayout } from './custom-component';
import "./style.css"
import { BookTypes } from '@/type/book/book-type';
import DynamicLayout from '@/components/book-list-layout/dynamic-layout';

const book: BookTypes = {
    title: "Kế toán tài chính",
    type: "Kế toán",
    code: " MS 001",
    price: "65.000",
    download: "+3k",
    state: "none",
    isFavorite: false,
    isRecommend: false,
    isLoved: true,
    isLovedState: false

}

export default function CustomizedTabs() {
    const data = [book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book]
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Box sx={{ overflowX: "scroll" }} className="scroll">
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="styled tabs example"
                    >
                        <StyledTab label="Hạng mục 1" />
                        <StyledTab label="Hạng mục 2" />
                        <StyledTab label="Hạng mục 3" />
                        <StyledTab label="Hạng mục 4" />
                        <StyledTab label="Hạng mục 5" />
                        <StyledTab label="Hạng mục 6" />
                    </StyledTabs>
                </Box>
                <MainLayout sx={{backgroundColor:"iub.background.default"}}>
                    <CustomTabPanel value={value} index={0}>
                        {/* <GridSystem> */}
                        <DynamicLayout data={data} />
                        {/* </GridSystem> */}
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                    <CenterVerticalLayout>
                        <StyledButton label='Xem thêm' width={112} bg='#F3633E' sx={{ mt: "50px", mb: "20px" }} />
                    </CenterVerticalLayout>
                </MainLayout>
            </Box>
        </Box>
    );
}