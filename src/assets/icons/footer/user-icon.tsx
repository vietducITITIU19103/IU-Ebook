import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------
type Props = BoxProps & {
    isActive?: boolean
}


function UserIcon({ isActive, sx, ...other }: Props) {
    return (
        <>
            {
                isActive ?
                <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="21" height="26" viewBox="0 0 21 26" fill="none" {...other} sx={{ width: "20px", height: "26px", ...sx }}>
                <path d="M10.3205 17.1963C4.92922 17.1963 0.324219 18.0463 0.324219 21.4463C0.324219 24.8475 4.90047 25.7275 10.3205 25.7275C15.7117 25.7275 20.3167 24.8788 20.3167 21.4775C20.3167 18.0763 15.7417 17.1963 10.3205 17.1963Z" fill="#4E49D6"/>
                <path opacity="0.4" d="M10.3201 13.9575C13.9926 13.9575 16.9351 11.0138 16.9351 7.34254C16.9351 3.67129 13.9926 0.727539 10.3201 0.727539C6.64883 0.727539 3.70508 3.67129 3.70508 7.34254C3.70508 11.0138 6.64883 13.9575 10.3201 13.9575Z" fill="#4E49D6"/>
              </Box>
                    :
                    <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none" {...other} sx={{ width: "20px", height: "26px", ...sx }}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2736 16.9863C5.43912 16.9863 1.31055 17.7173 1.31055 20.6447C1.31055 23.572 5.41293 24.3292 10.2736 24.3292C15.1082 24.3292 19.2355 23.597 19.2355 20.6709C19.2355 17.7447 15.1344 16.9863 10.2736 16.9863Z" stroke="#6C737F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2746 12.8111C13.4472 12.8111 16.0186 10.2384 16.0186 7.06583C16.0186 3.89321 13.4472 1.32178 10.2746 1.32178C7.10195 1.32178 4.52933 3.89321 4.52933 7.06583C4.51862 10.2277 7.07338 12.8003 10.2341 12.8111H10.2746Z" stroke="#6C737F" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                  </Box>
            }
        </>

    );
}

export default memo(UserIcon);