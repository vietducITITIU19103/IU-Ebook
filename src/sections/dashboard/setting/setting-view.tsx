"use client"
import * as React from 'react';
import SettingTabs from './sub-view/setting-tabs';
import Box from '@mui/material/Box';
import ProfileView from './sub-view/profile-view';

export default function SettingView() {

    return (
        <>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <ProfileView />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <SettingTabs />
            </Box></>
    );
}