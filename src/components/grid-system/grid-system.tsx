import React from 'react'
import Stack from '@mui/material/Stack';
import BookCard from '@/components/card';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/system' {
    interface BreakpointOverrides {
        // Your custom breakpoints
        xssm: true;
        smmd: true;
        mdlgmin: true,
        mdlg: true,
        smmdmin:true,
        // Remove default breakpoints
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

export default function GridSystem({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            theme={createTheme({
                breakpoints: {
                    values: {
                        xs: 0,
                        xssm: 450,
                        sm: 600,
                        smmdmin: 650,
                        smmd: 800,
                        md: 900,
                        mdlgmin: 1000,
                        mdlg: 1100,
                        lg: 1200,
                        xl: 1500,
                    },
                },
            })}
        >
            {children}
        </ThemeProvider>
    )
}
