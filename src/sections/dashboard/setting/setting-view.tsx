"use client"
import * as React from 'react';
import SettingTabs from './sub-view/setting-tabs';
import Box from '@mui/material/Box';
import SettingMobileView from './sub-view/setting-mobile-view';

export default function SettingView({ tabIndex }: { tabIndex: number }) {

    return (
        <>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <SettingMobileView />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <SettingTabs tabIndex={tabIndex} />
            </Box>
        </>
    );
}