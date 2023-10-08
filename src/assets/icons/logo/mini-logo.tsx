import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function MiniLogo({ ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none" { ...other }>
            <rect x="46.2167" y="47.1094" width="46.2165" height="46.6082" rx="15.6666" transform="rotate(-180 46.2167 47.1094)" fill="url(#paint0_linear_1295_105891)" />
            <mask id="mask0_1295_105891" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="1" width="46" height="47">
                <rect x="45.4334" y="47.1055" width="44.6499" height="45.8215" rx="15.6666" transform="rotate(-180 45.4334 47.1055)" fill="#32DAC3" />
            </mask>
            <g mask="url(#mask0_1295_105891)">
            </g>
            <mask id="mask1_1295_105891" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="1" width="46" height="47">
                <rect x="45.4333" y="47.5" width="44.6499" height="46.2165" rx="15.6666" transform="rotate(-180 45.4333 47.5)" fill="black" />
                <rect x="45.4333" y="47.5" width="44.6499" height="46.2165" rx="15.6666" transform="rotate(-180 45.4333 47.5)" stroke="white" />
                <mask id="mask2_1295_105891" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="1" width="46" height="47">
                    <rect x="45.4333" y="47.1055" width="44.6499" height="45.8215" rx="15.6666" transform="rotate(-180 45.4333 47.1055)" fill="#32DAC3" />
                </mask>
                <g mask="url(#mask2_1295_105891)">
                </g>
            </mask>
            <g mask="url(#mask1_1295_105891)">
                <path d="M6.10352e-05 35.7507L19.2595 20.3766C20.6511 19.2657 22.7099 20.2566 22.7099 22.0372V27.4255C22.7099 29.2148 24.7861 30.2029 26.1747 29.0746L45.4332 13.4258" stroke="url(#paint1_linear_1295_105891)" stroke-width="3.13332" stroke-linecap="round" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_1295_105891" x1="69.3249" y1="47.1094" x2="69.3249" y2="93.7176" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#071E1C" />
                    <stop offset="1" stop-color="#082C2A" />
                </linearGradient>
                <linearGradient id="paint1_linear_1295_105891" x1="45.4333" y1="13.4258" x2="-2.24036" y2="14.4209" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#35DEC1" stop-opacity="0" />
                    <stop offset="0.494792" stop-color="#35DEC1" />
                    <stop offset="1" stop-color="#35DEC1" stop-opacity="0" />
                </linearGradient>
            </defs>
        </Box>
    );
}

export default memo(MiniLogo);