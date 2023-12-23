import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';
import { GRAY_COLOR, WHITE_COLOR } from '@/app/color'
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------
type Props = BoxProps & {
    color?: string
}

function DownloadIcon({ sx, color, ...other }: Props) {
    // const {palette: {iub}} = useTheme()
    //iub.text.light
    const colorCode = color? color : "red"
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" {...other} sx={{width: "13px", height: "13px", ...sx}}> 
            <path d="M6.25667 8.00439L6.25667 0.980469" stroke={colorCode} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.95776 6.29657L6.25676 8.00457L4.55576 6.29657" stroke={colorCode} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.95934 3.74133H9.50359C10.6907 3.74133 11.6526 4.70325 11.6526 5.89092L11.6526 8.73992C11.6526 9.92408 10.693 10.8837 9.50884 10.8837L3.0105 10.8837C1.82342 10.8837 0.86092 9.92117 0.86092 8.73408L0.86092 5.8845C0.86092 4.70092 1.82109 3.74133 3.00467 3.74133L3.55417 3.74133" stroke={colorCode} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </Box>
    );
}

export default memo(DownloadIcon);