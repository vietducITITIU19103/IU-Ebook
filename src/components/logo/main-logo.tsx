import React from 'react'
import Stack from '@mui/material/Stack';
import IUHLogo from '@/assets/images/Logo-Ebook.png';
import TextHidden from "@/components/text-hidden"
import Image from 'next/image';

export default function MainLogo() {
    return (
        <Stack direction="row" spacing="12px" alignItems="center" justifyContent="center">
            <Image src={IUHLogo} alt="Register logo" width={132} height={37}></Image>
            <TextHidden>Factorazy</TextHidden>
        </Stack>
    )
}
