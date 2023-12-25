import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';
import { useContext } from 'react';
import { ThemeContext } from '@/theme';
// ----------------------------------------------------------------------

function MailIcon({ ...other }: BoxProps) {
    const {palette} = useContext(ThemeContext)
    const colorCode = palette.iub.text.footer
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" { ...other }>
            <path d="M18.0698 9.63513L14.0272 12.9223C13.2635 13.5283 12.1889 13.5283 11.4251 12.9223L7.34839 9.63513" stroke={colorCode} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.1654 20.6883C19.9324 20.6959 21.7974 18.4225 21.7974 15.6282V9.37932C21.7974 6.58511 19.9324 4.31165 17.1654 4.31165H8.23306C5.466 4.31165 3.60107 6.58511 3.60107 9.37932V15.6282C3.60107 18.4225 5.466 20.6959 8.23306 20.6883H17.1654Z" stroke={colorCode} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Box>
    );
}

export default memo(MailIcon);