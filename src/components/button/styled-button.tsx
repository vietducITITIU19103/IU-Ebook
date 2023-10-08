'use client';
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./style.css"

type Props = ButtonProps & {
  label: string,
  width: number,
  bg: string
}
//'#4E49D6'
export default function StyledButton({ label, width, bg, sx, ...other }: Props) {
  return (
    <Box position="relative" className="container" sx={{ display: { xs: "none", md: "block" },...sx }}>
      <Button
        {...other}
        className="main_layer"
        sx={{
          width: width,
          backgroundColor: bg,
          textTransform: "initial",
          '&: hover': {
            backgroundColor: bg
          },   
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
