"use client"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useTimeout } from '@/hooks/use-set-timeout';

export default function CustomBackdrop({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        window.setTimeout(handleClose, 2000)
    }, [open])
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);

    };

    return (
        <div>
            <Box onClick={handleOpen}>{children}</Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "transparent" }}
                open={open}
                onClick={handleClose}
            >
                <Box sx={{ backgroundColor: "rgba(17, 25, 39, 0.6)", borderRadius: "16px", width: "246px", height: "120px" }}>
                    <Typography>Đã thêm tài liệu vào “Yêu thích”</Typography>
                </Box>
            </Backdrop>
        </div>
    );
}