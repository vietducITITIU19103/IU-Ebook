"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { StyledTabs, a11yProps, CustomTabPanel, StyledTab } from '../../_common/tab-component';
import PersonalProfile from './personal-profile';
import ChangePassword from './change-password';
import SystemSetting from './system-setting';

export default function SettingTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: "white", padding:"16px 24px 34px 24px", borderRadius: '16px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ textTransform: "initial" }} >
                    <StyledTab label="Hồ sơ cá nhân" {...a11yProps(0)} />
                    <StyledTab label="Thay đổi mật khẩu" {...a11yProps(1)} />
                    <StyledTab label="Tùy chỉnh hệ thống" {...a11yProps(2)} />
                </StyledTabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <PersonalProfile/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ChangePassword/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <SystemSetting/>
            </CustomTabPanel>
        </Box>
    );
}