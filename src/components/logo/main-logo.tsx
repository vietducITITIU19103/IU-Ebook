import React from 'react'
import Stack from '@mui/material/Stack';
import TextHidden from "@/components/text-hidden"
import MainLogoIcon from '@/assets/icons/logo/main-logo';

export default function MainLogo() {
    return (
        <Stack
            direction="row"
            spacing="12px"
            alignItems="center"
            justifyContent="center"
            component="a" 
            href='/'
            sx={{cursor: "pointer"}}
        >
            <MainLogoIcon sx={{width: '132px', height: "36.5px"}}/>
            <TextHidden>IUH Ebook</TextHidden>
        </Stack>
    )
}
