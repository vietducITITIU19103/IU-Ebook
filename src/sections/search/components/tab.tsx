"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import BookCard from '@/components/card';
import Box from '@mui/material/Box';
import StyledButton from '@/components/button/styled-button';
import fill from "lodash/fill"
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import { CustomTabPanel, StyledTab, StyledTabs, MainLayout } from './custom-component';
import "./style.css"

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
        <Box sx={{ width: '100%', backgroundColor: "#F5F5FA" }}>
            <Box sx={{ backgroundColor: "#F5F5FA" }}>
                <Box  sx={{ overflowX: "scroll"}} className="scroll">
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
                <MainLayout>
                    <CustomTabPanel value={value} index={0}>
                        <Stack direction="row" justifyContent={{ xs: "center", sm: "space-evenly", md: "space-around" }} flexWrap="wrap" useFlexGap rowGap="54px" columnGap="20px">
                            {
                                fill(new Array(30), "book")
                                    .map((item: string, index) => {
                                        return (
                                            <BookCard book={book} key={index} />
                                        )
                                    }
                                    )
                            }
                        </Stack>
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
                <Box sx={{ p: 3 }} />
            </Box>
        </Box>
    );
}