'use client';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function CommonGridLayout({ children }: { children: React.ReactNode }) {

    return (
        <ThemeProvider
            theme={createTheme({
                breakpoints: {
                    values: {
                        xs: 0,
                        xssm: 450,
                        sm: 600,
                        smmd: 800,
                        md: 900,
                        mdlg: 1100,
                        lg: 1200,
                        xl: 1500,
                    },
                },
            })}
        >
            {children}
        </ThemeProvider>
    );
}
