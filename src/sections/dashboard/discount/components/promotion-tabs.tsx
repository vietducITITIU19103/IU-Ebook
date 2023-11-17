import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { textTransform } from '@mui/system';
import { styled } from '@mui/material/styles';
import ListPromotionView from '../sub-view/list-promotion-view';

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

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
         display: 'flex',
        // justifyContent: 'center',
         backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: '#FE0000',
    },
});

export const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontSize: "16px",
    lineHeight: 1,
    fontFamily: "inherit",
    color: "#0D006A",
    fontWeight: 700,
    marginRight: theme.spacing(1),
    '&.Mui-selected': {
        color: '#0D006A',

    },
    '&.Mui-focusVisible': {
        backgroundColor: '#0D006A',

    },
}));

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
                <Box sx={{ p: 0}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PromotionTabs({data}:{data:any}) {
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
                <ListPromotionView data={data}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}