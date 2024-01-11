import * as React from 'react';
import Box from '@mui/material/Box';
import ListPromotionView from '../sub-view/list-promotion-view';
import { StyledTabs, a11yProps, CustomTabPanel, StyledTab } from '../../_common/tab-component';

export default function PromotionTabs({ data }: { data: any }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{  position: "sticky",zIndex: 5, top: "90px", backgroundColor: "red", width: "100%" , height: "30px"}}>
                <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ textTransform: "initial", position: "relative", top: "-40px", pt: "30px", borderBottom: 1, borderColor: 'divider', backgroundColor: "iub.background.body"}} >
                    <StyledTab label="Tất cả" {...a11yProps(0)} />
                    <StyledTab label="Khuyến mãi ebook" {...a11yProps(1)} />
                    <StyledTab label="Ưu đãi thanh toán" {...a11yProps(2)} />
                    <StyledTab label="Hết hiệu lực" {...a11yProps(3)} />
                </StyledTabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ListPromotionView data={data} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ListPromotionView data={data} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <ListPromotionView data={data} />
            </CustomTabPanel>
        </Box>
    );
}