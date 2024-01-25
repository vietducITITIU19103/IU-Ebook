import * as React from 'react';
import Box from '@mui/material/Box';
import { StyledTabs, a11yProps, CustomTabPanel, StyledTab } from '../_component/tab-component'
import LibCarousel from '../_component/lib-carousel';
import { useResponsive } from '@/hooks/use-responsive';

export default function PromotionTabs() {
    const [value, setValue] = React.useState(0);
    const lgDown = useResponsive("down", "lg")
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ backgroundColor: "transparent", width: "100%", height: "30px", mt: "20px" }}>
                <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" centered={!lgDown} {...lgDown && { variant: "scrollable", scrollButtons: "auto" }}>
                    <StyledTab label="Kế toán doanh nghiệp" {...a11yProps(0)} />
                    <StyledTab label="Kế toán tài chính" {...a11yProps(1)} />
                    <StyledTab label="Kế toán thương mại" {...a11yProps(2)} />
                    <StyledTab label="Kiểm toán độc lập" {...a11yProps(3)} />
                    <StyledTab label="Nguyên lý kế toán" {...a11yProps(3)} />
                    <StyledTab label="Tư duy kế toán" {...a11yProps(3)} />
                </StyledTabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <LibCarousel />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <LibCarousel />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <LibCarousel />
            </CustomTabPanel>
        </Box>
    );
}