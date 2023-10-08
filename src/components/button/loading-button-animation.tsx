'use client';
import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';


export default function LoadingButtonAnimation({isSubmitting}:{isSubmitting:boolean}) {
  return (
    <Box position="relative" sx={{height: '36px'}}>
                  <LoadingButton
                    fullWidth
                    color="inherit"
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    sx={{
                      height: '36px',
                      width: '194px',
                      borderRadius: '8px',
                      backgroundColor: '#4E49D6',
                      textTransform: 'inherit',
                      color: 'white',
                      fontSize: '16px',
  
                      transition: "all 0.3s ease",
                      '&: hover': {
                        backgroundColor: '#4E49D6',
                        transform: 'translate(3.5px,4.5px)'
                      },
                    }}
                  >
                    Login
                  </LoadingButton>
                  <Box
                    sx={{
                      width: '194px',
                      height: '36px',
                      position: 'absolute',
                      top: '4.5px',
                      left: '3.5px',
                      borderRadius: '8px',
                      border: '1px solid #4E49D6',
                      transition: "all 0.3s ease",
                      zIndex: -1
                    }}
                  ></Box>
                </Box>
  )
}
