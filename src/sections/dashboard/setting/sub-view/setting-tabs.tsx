"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { StyledTabs, a11yProps, CustomTabPanel, StyledTab } from '../../_common/tab-component';
import PersonalProfile from './personal-profile';
import ChangePassword from './change-password';
import SystemSetting from './system-setting';
import { useRouter } from 'next/navigation';

export default function SettingTabs({ tabIndex }: { tabIndex: number }) {
    const router = useRouter();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        switch (newValue) {
            case 0:
                router.push("/dashboard/setting/")
                break;
            case 1:
                router.push("/dashboard/setting/change-password/")
                break;
            case 2:
                router.push("/dashboard/setting/system-setting/")
                break;
            default:
                break;
        }

    };

    return (
        <Box sx={{ width: '100%', backgroundColor: "iub.background.default", padding: "16px 24px 34px 24px", borderRadius: '16px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <StyledTabs value={tabIndex} onChange={handleChange} aria-label="basic tabs example" sx={{ textTransform: "initial" }} >
                    <StyledTab label="Hồ sơ cá nhân" {...a11yProps(0)} />
                    <StyledTab label="Thay đổi mật khẩu" {...a11yProps(1)} />
                    <StyledTab label="Tùy chỉnh hệ thống" {...a11yProps(2)} />
                </StyledTabs>
            </Box>
            <CustomTabPanel value={tabIndex} index={0}>
                <PersonalProfile />
            </CustomTabPanel>
            <CustomTabPanel value={tabIndex} index={1}>
                <ChangePassword />
            </CustomTabPanel>
            <CustomTabPanel value={tabIndex} index={2}>
                <SystemSetting />
            </CustomTabPanel>
        </Box>
    );
}