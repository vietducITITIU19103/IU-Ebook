'use client';
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./style.css"

type Props = ButtonProps & {
  label: string,
  width: number,
  bg: "#4E49D6" | "#F3633E"
}
//'#4E49D6'
export default function StyledButton({ label, width, bg, sx, ...other }: Props) {
  return (
    <Box position="relative" className="container" sx={{ ...sx }}>
      <Button
        {...other}
        className={bg==="#4E49D6"?"main_layer_dark":"main_layer"}
        sx={{
          color:"white",
          width: width,
          backgroundColor: bg,
          borderRadius: "8px !important",
          textTransform: "initial",
          '&: hover': {
            backgroundColor: bg,
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
