'use client';
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./style.css"
import { BoxProps } from '@mui/system';

type Props = BoxProps & {
  label: string,
  width: number,
  bg: "#4E49D6" | "#F3633E",
  type?: "button" | "submit"
}
//'#4E49D6'
export default function StyledButton({ type, label, width, bg, sx, ...other }: Props) {
  return (
    <Box position="relative" className="container" sx={{ ...sx, cursor: "pointer" }} {...other}>
      <Button
        className={bg === "#4E49D6" ? "main_layer_dark" : "main_layer"}
        type={type ? type : "button"}
        sx={{
          color: "white",
          width: width,
          backgroundColor: bg,
          fontWeight: 600 ,
          borderRadius: "8px !important",
          textTransform: "initial",
          '&: hover': {
            backgroundColor: bg,
          }
        }}
      >
        {label}
      </Button>
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
