"use client"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import FavoriteIcon from '@/assets/icons/toast/favorite-icon';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';

export default function CustomBackdrop({ children, state, insideComponent }: { children: React.ReactNode, state: boolean, insideComponent: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        window.setTimeout(handleClose, 2000)
    }, [open])
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        if(!state){
            setOpen(true);
        }
    };

    return (
        <div>
            <Box onClick={handleOpen}>{children}</Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "transparent" }}
                open={open}
                onClick={handleClose}
            >
                {insideComponent}
            </Backdrop>
        </div>
    );
}