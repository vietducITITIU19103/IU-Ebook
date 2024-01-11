'use client';
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./style.css"
import { BoxProps } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';

type Props = BoxProps & {
    label: string,
    width: number,
    bg: "#4E49D6" | "#F3633E",
    type?: "button" | "submit",
    loading: boolean
}
//'#4E49D6'
export default function LoadingStyledButton({ type, label, width, bg, sx, loading, ...other }: Props) {
    return (
        <Box position="relative" className="container" sx={{ ...sx, cursor: "pointer" }} {...other}>
            <LoadingButton
                loading={loading}
                className={bg === "#4E49D6" ? "main_layer_dark" : "main_layer"}
                type={type ? type : "button"}
                sx={{
                    color: "white",
                    width: width,
                    fontWeight: 600,
                    backgroundColor: bg,
                    borderRadius: "8px !important",
                    textTransform: "initial",
                    '&: hover': {
                        backgroundColor: bg,
                    }
                }}
            >
                {label}
            </LoadingButton>
            <Box
                className="bg_layer"
                sx={{
                    width: width,
                    border: `1px solid ${bg}`,
                }}
            ></Box>
        </Box>
    )
}
