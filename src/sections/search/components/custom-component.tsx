"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Container, { ContainerProps } from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useResponsive } from '@/hooks/use-responsive';

// const BgContainer = styled(LoginBg)(({ theme }) => ({
//     transition: "all 0.2s ease",
//     width: '532px', 
//     height: '629px',
//     [theme.breakpoints.down(1075)]: {
//       width: '475px', height: '600px'
//     },
//   }));


export const MainLayout = styled(Container)<ContainerProps>(({ theme }) => ({
    backgroundColor: "white",
    padding: "32px",
    borderRadius: "16px",
    [theme.breakpoints.down("md")]: {
        backgroundColor: "transparent",
        padding: "20px",
        paddingBottom: "100px",
    }
}))

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
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
                <Box>
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

export const StyledTabs = styled((props: StyledTabsProps) => {
    const sm = useResponsive("down", "md")
    return (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
            centered={!sm}
            sx={{width: {xs: "800px", sm: "100%"},}}
        />
    )
})
    ({
        padding: "20px",
        backgroundColor: "#F5F5FA",
        '& .MuiTabs-indicator': {

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

export const StyledTab = styled((props: StyledTabProps) => (
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

