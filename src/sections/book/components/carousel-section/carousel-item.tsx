"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import imgSrc from "@/assets/images/previewImg.png"


import { RootLayer, GradientLayer, ContentLayer, ControlButton } from './custom-component';



export default function CarouselItem() {
    return (
        <RootLayer>
            <Image
                src={imgSrc}
                alt="peple"
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "center"
                }} />
            
        </RootLayer>
    )
}
