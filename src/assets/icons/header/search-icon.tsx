import React, { memo } from 'react'
import Box, { BoxProps } from '@mui/material/Box';

function SearchIcon({ ...other }: BoxProps) {
    return (
        <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none" {...other}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 9C16.3333 12.866 13.1992 16 9.33325 16C5.46726 16 2.33325 12.866 2.33325 9C2.33325 5.13401 5.46726 2 9.33325 2C13.1992 2 16.3333 5.13401 16.3333 9ZM16.3652 14.6177C17.5968 13.078 18.3333 11.125 18.3333 9C18.3333 4.02944 14.3038 0 9.33325 0C4.36269 0 0.333252 4.02944 0.333252 9C0.333252 13.9706 4.36269 18 9.33325 18C11.4583 18 13.4113 17.2635 14.9509 16.0319L17.6261 18.7071C18.0167 19.0976 18.6498 19.0976 19.0404 18.7071C19.4309 18.3166 19.4309 17.6834 19.0404 17.2929L16.3652 14.6177Z" fill="#9DA4AE" />
        </Box>
    )
}
export default memo(SearchIcon)
