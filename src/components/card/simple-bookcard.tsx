"use client"
import * as React from 'react';
import { CardProps } from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from 'next/navigation';
import { CustomCard} from './custom-component';
import Box from '@mui/material/Box';

export default function SimpleBookCard({ id, sx, src, ...other }: { id: string, src: string } & CardProps) {
    const router = useRouter()

    return (
        <Box sx={{ position: "relative", mb: "20px"}}>
            <CustomCard
                onClick={() => router.push("/book/"+id)}
                sx={{ ...sx, borderRadius: "16px"  }}
                {...other}>
                <CardMedia
                    sx={{ height: {xs:"400px",sm:"285px"}, objectFit: "contain", objectPosition: "0%"}}
                    image={src}
                    title="book's image"
                />   
            </CustomCard >
        </Box>
    )
}

