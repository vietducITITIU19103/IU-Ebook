'use client';
import React, { useState } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./style.css"

type Props = ButtonProps & {
  label: string,
  width: number,
  bg: string
}
//'#4E49D6'
export default function StyledButton({ label, width, bg, ...other }: Props) {
  return (
    <Box position="relative" className="container" sx={{display: {xs:"none",md:"block"}}}>
      <Button
        {...other}
        className="main_layer"
        sx={{
          width: width,
          backgroundColor: bg,
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
