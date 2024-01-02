"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Container, { ContainerProps } from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ThemeContext } from '@/theme';



export const TabRoot = styled(Container)<ContainerProps>(({ theme }) => {
    const { palette } = useContext(ThemeContext)
    return ({
        width: '100%',
        borderRadius: "16px",
        border: `1px solid ${palette.iub.line.default}`,
        my: "36px",
        [theme.breakpoints.down("md")]: {
            border: "none",
            backgroundColor: palette.iub.background.default,
            borderRadius: 0,
        }
    })
})

export const MainLayout = styled(Container)<ContainerProps>(({ theme }) => ({
    width: "100%",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}))

export const ContainerLayout = styled(Container)<ContainerProps>(({ theme }) => {
    const { palette } = useContext(ThemeContext)
    return ({
        backgroundColor: palette.iub.background.default,
        padding: "32px",
        borderRadius: "16px",
        marginBottom: "30px",
        [theme.breakpoints.down("md")]: {
            backgroundColor: "transparent",
            padding: "20px",
            paddingBottom: "100px",
        }
    })
})

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
                height: "auto",
                width: { xs: "100%", md: width + "px" },
                padding: "0 !important",
                marginBottom: { xs: "22px", md: "44px" },
                marginTop: "4px",
            }}
        >
            {value === index && (
                <Box>
                    <>{children}</>
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
    return (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
            centered={true}
            sx={{
                '& .MuiTabs-indicator': {
                    backgroundColor: "iub.text.active",
                },
            }}
        />
    )
})
    ({
        '& .MuiTabs-indicatorSpan': {
            backgroundColor: "red"
        },
    });

interface StyledTabProps {
    label: string;
}

export const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props}
        sx={{
            color: "iub.text.normal",
            '&.Mui-selected': {
                color: "iub.text.active",

            },
        }} />
))(({ theme }) => ({
    textTransform: 'none',
    fontSize: "16px",
    lineHeight: 1,
    fontFamily: "inherit",
    fontWeight: 700,
    marginRight: theme.spacing(1),
    '&.Mui-focusVisible': {
        backgroundColor: '#0D006A',

    },
}));

