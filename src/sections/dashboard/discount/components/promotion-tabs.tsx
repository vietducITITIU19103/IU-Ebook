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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ textTransform: "initial" }} >
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