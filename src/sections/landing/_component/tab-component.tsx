"use client"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


interface StyledTabProps {
    label: string;
}
interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const StyledTabs = styled((props: TabsProps) => (
    <Tabs
        {...props}
        
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    display: 'flex',
    justifyContent: "center !important",
    '& .MuiTabs-indicator': {
        backgroundColor: 'transparent',
        width: '100%',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: '#FE0000',
    },
});

export const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props}
        sx={{
            color: "iub.text.table_title",
            borderBottom: "2px solid #FF7575",
            '&.Mui-selected': {
                color: "iub.text.paper",
                backgroundColor: '#FF7575',
            },
        }} />
))(({ theme }) => ({
    textTransform: 'none',
    fontSize: "16px",
    borderBottom: "2px solid #FF7575",
    lineHeight: 1,
    fontFamily: "inherit",
    backgroundColor: "white",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    paddingRight: "20px",
    paddingLeft: "20px",
    fontWeight: 700,
    marginRight: theme.spacing(2),
}));

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
                <Box sx={{ p: 0, pt: "10px" }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}