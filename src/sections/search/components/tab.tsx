"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabBg from '@/assets/icons/background/tab-bg';
import tag from "./tag.png"
import img from "@/assets/images/momo.png"
import Typography from '@mui/material/Typography';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        centered
    />
))({
    padding: "24px",
    backgroundColor:"#F5F5FA",
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        // maxWidth: 40,
        // width: '100%',
        // backgroundColor: '#635ee7',
    },
});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    minHeight: "38px",
    textTransform: 'none',
    backgroundColor: "white",
    padding: "0px 24px",
    lineHeight: 1,
    color: " #9DA4AE",
    border: "1px solid #9DA4AE",
    borderRadius: "8px",
    marginRight: theme.spacing(1),

    '&.Mui-selected': {
        color: '#4E49D6',
        border: "1px solid #4E49D6",
        backgroundImage: `url(/images/tag.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "23px 22px",
        backgroundPosition: "-1% -2%",
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor:"#F5F5FA" }}>
            <Box sx={{ backgroundColor:"#F5F5FA" }}>
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
                <CustomTabPanel value={value} index={0}>
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
                <Box sx={{ p: 3 }} />
            </Box>
        </Box>
    );
}