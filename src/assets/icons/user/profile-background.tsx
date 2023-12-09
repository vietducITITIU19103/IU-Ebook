import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';
import { IconContainer } from '@/components/icon-container/icon-container';
import HeartIcon from '../header/heart-icon';
import CartIcon from '@/assets/icons/header/cart-icon';
// ----------------------------------------------------------------------



function ProfileBackground({ sx, ...other }: BoxProps) {
    return (
        <Box sx={{width: "100%", height: "auto", position: "relative" }}>
            <Box component="svg"
                width={744}
                height={280}
                viewBox="0 0 744 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...other} sx={{ width: "100%", height: "auto", position: "relative" }}
            >
                <ellipse
                    cx="373.426"
                    cy="76.4205"
                    rx="547.258"
                    ry="203.421"
                    fill="url(#paint0_linear_1_30365)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1_30365"
                        x1="-173.832"
                        y1="76.4205"
                        x2="920.683"
                        y2="76.4205"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#919BFF" />
                        <stop offset={1} stopColor="#210CAE" />
                    </linearGradient>
                </defs>

            </Box>
            <IconContainer sx={{ top: "10px", right: "60px" }}>
                <HeartIcon />
            </IconContainer>
            <IconContainer sx={{ top: "10px", right: "10px" }}>
                <CartIcon color="white" sx={{width: "28px", height: "29px"}}/>
            </IconContainer>
        </Box>

    );
}

export default memo(ProfileBackground);
