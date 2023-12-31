
import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';
import { ThemeContext } from '@/theme';
import { useContext } from 'react';

// ----------------------------------------------------------------------
type Props = BoxProps & {
    isActive?: boolean
}


function HomeIcon({ isActive, sx, ...other }: Props) {
    const {palette: {iub: {text}}} = useContext(ThemeContext);
    const colorCode = isActive ? text.active : "#6C737F"
    return (
        <>
            {isActive ?
                <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill={isActive ? "#4E49D6" : "transparent"} sx={{ width: "24px", height: "25px", ...sx }} {...other}>
                    <path d="M8.41847 23.4667V19.6445C8.41847 18.6688 9.21521 17.8779 10.198 17.8779H13.7908C14.2627 17.8779 14.7154 18.064 15.0491 18.3953C15.3828 18.7266 15.5703 19.176 15.5703 19.6445V23.4667C15.5674 23.8723 15.7276 24.2623 16.0155 24.5502C16.3033 24.8381 16.6951 25 17.1037 25H19.5548C20.6995 25.0029 21.7984 24.5536 22.609 23.751C23.4195 22.9485 23.875 21.8587 23.875 20.7223V9.83357C23.875 8.91558 23.4651 8.0448 22.7558 7.45584L14.4175 0.844836C12.9671 -0.314298 10.8889 -0.276872 9.48174 0.933724L1.33377 7.45584C0.590926 8.02744 0.14694 8.90079 0.125 9.83357V20.7112C0.125 23.0798 2.05923 25 4.44522 25H6.84036C7.68903 25 8.37875 24.3203 8.3849 23.4778L8.41847 23.4667Z" fill={colorCode} />
                </Box>
                :
                <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none" sx={{ width: "24px", height: "25px", ...sx }} {...other}>
                    <path d="M9.44652 24.9643V21.1308C9.4465 20.1558 10.2414 19.3635 11.2263 19.357H14.8339C15.8234 19.357 16.6256 20.1512 16.6256 21.1308V21.1308V24.9762C16.6254 25.804 17.2928 26.4806 18.1288 26.5H20.5339C22.9314 26.5 24.875 24.5758 24.875 22.2023V22.2023V11.2973C24.8622 10.3635 24.4193 9.48669 23.6725 8.91629L15.4472 2.35663C14.0062 1.21446 11.9578 1.21446 10.5168 2.35663L2.32753 8.9282C1.57782 9.49628 1.13423 10.3746 1.125 11.3092V22.2023C1.125 24.5758 3.06859 26.5 5.46614 26.5H7.8712C8.72794 26.5 9.42247 25.8124 9.42247 24.9643V24.9643" stroke="#6C737F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </Box>
            }
        </>
    );
}

export default memo(HomeIcon);