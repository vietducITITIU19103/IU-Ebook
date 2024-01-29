import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function SmallStarIcon({ sx, ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none" {...other} sx={{ width: "26px", height: "27px", ...sx }}>
            <path d="M1.53996 12.075C0.865963 12.4601 -0.385747 14.328 0.731166 14.925L4.19743 16.8507C5.5358 17.439 6.8241 18.1344 8.04885 18.9305C8.79218 20.0802 9.43729 21.2912 9.97456 22.5508C10.6678 23.7833 11.3418 25.0157 12.0158 26.2482C12.4973 27.134 13.7105 25.9016 13.9416 25.4972C18.2937 17.544 17.1768 19.5275 17.793 18.5068C18.3514 18.2565 17.6389 18.6224 24.4944 14.8865C25.1684 14.5014 26.4202 12.6334 25.3032 12.0364L18.0241 8.06948L14.0186 0.75177C13.5371 -0.134058 12.3239 1.0984 12.0929 1.5028C7.79852 9.3597 8.8384 7.51102 8.14514 8.49314C7.70223 8.68571 8.27995 8.39685 1.53996 12.075ZM11.6307 6.68297C12.0158 5.98971 12.3817 5.29646 12.7669 4.62246L15.9058 10.3996C15.9385 10.5504 16.0155 10.6886 16.1234 10.7978C16.2331 10.907 16.3718 10.9827 16.522 11.0158L21.5096 13.7503C19.7784 14.4796 18.1415 15.4172 16.6375 16.5426C15.7575 17.6876 15.0315 18.9438 14.4808 20.2785C14.0956 20.9717 13.7297 21.665 13.3446 22.339L11.9388 19.7586C11.4497 18.4949 10.8026 17.2981 10.0131 16.196C8.90965 15.4105 7.71188 14.7636 6.45053 14.2703L4.67885 13.3074C6.36385 12.53 7.95258 11.5606 9.41612 10.4188C10.3212 9.27998 11.0664 8.02307 11.6307 6.68297Z" fill="#F3633E" />
            <path d="M9.56117 9.05211L2.94531 14.0148L9.25363 15.8761L12.917 24.1807L16.919 16.5842L23.4454 12.7216L17.9657 10.2753L12.917 3.90198L9.56117 9.05211Z" fill="#F3633E" />
        </Box>
    );
}

export default memo(SmallStarIcon);