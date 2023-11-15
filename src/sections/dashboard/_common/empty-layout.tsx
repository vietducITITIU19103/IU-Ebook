import React from 'react'
import Stack from '@mui/material/Stack'
import "../../book/components/book-tabs/style.css"
import Image from 'next/image'
import { CartDescription, CartTitle } from '@/sections/cart/components/custom-component'
import StyledButton from '@/components/button/styled-button'
import { useRouter } from 'next/navigation'

type Props = {
    title: string,
    description: string,
    buttonLabel: string,
    href: string,
    src: any, 
    direction: any, 
    width: number,
    
}

export default function EmptyLayout({ href, buttonLabel, title, description, src, direction, width }: Props) {
    const router = useRouter()
    return (
        <Stack direction={direction} justifyContent="center" alignItems="center" sx={{ mt: "86px", mb: "50px", width: "100%" }} spacing="24px">
            <Stack maxWidth={{ xs: "100%", md: width + "px" }} alignItems={{ xs: "center", md: "flex-start" }}>
                <CartTitle sx={{ mb: "10px" }}>
                {title}
                </CartTitle>
                <CartDescription
                    sx={{ mb: "16px" }}>
                    {description}
                </CartDescription>
                <StyledButton label={buttonLabel} bg='#4E49D6' width={170} onClick={()=>router.push(href)} />
            </Stack>
            <Image src={src} alt="empty cart illustration" style={{ width: "480px", height: 'auto' }} />
        </Stack>
    )
}