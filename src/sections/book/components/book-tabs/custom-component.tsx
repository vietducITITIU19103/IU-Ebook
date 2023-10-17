"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Container, { ContainerProps } from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useResponsive } from '@/hooks/use-responsive';


export const MainLayout = styled(Container)<ContainerProps>(({ theme }) => ({
    width: "100%",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"

}))

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    width: number
}

export function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, width } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            sx={{
                maxHeight: '420px',
                width: width + "px",
                padding: "0 !important",
                marginBottom: "44px",
                marginTop: "4px",
            }}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}


interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const StyledTabs = styled((props: StyledTabsProps) => {
    const sm = useResponsive("down", "md")
    return (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
            centered={!sm}
            sx={{ width: { xs: "800px", sm: "100%" }, }}
        />
    )
})
    ({
        padding: "20px",
        '& .MuiTabs-indicator': {

            backgroundColor: '#4E49D6',
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

export const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    minHeight: "38px",
    textTransform: 'none',
    padding: "0px 24px",
    lineHeight: 1,
    color: " #9DA4AE",
    marginRight: theme.spacing(1),
    '&.Mui-selected': {
        color: '#4E49D6',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

