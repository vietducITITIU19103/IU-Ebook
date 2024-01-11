import React from 'react'
import Stack, {StackProps} from '@mui/material/Stack';
import TextHidden from "@/components/text-hidden"
import MainLogoIcon from '@/assets/icons/logo/main-logo';


export default function MainLogo({width, height, ...other}: StackProps & {width?: string, height?:string}) {
    return (
        <Stack
            direction="row"
            spacing="12px"
            alignItems="center"
            justifyContent="center"
            component="a" 
            href='/'
            sx={{cursor: "pointer"}}
            {...other}
        >
            <MainLogoIcon sx={{width: width || '132px', height: height || "36.5px"}}/>
            <TextHidden>IUH Ebook</TextHidden>
        </Stack>
    )
}
