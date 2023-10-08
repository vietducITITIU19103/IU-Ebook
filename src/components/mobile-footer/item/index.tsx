import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Item({ children, title, isActive, isHidden }: { children: React.ReactNode, title: string, isActive?: Boolean, isHidden?: Boolean }) {
    return (
        <Stack
            direction="column"
            spacing="2px"
            alignItems="center"
            justifyContent="center"
            sx={{
                position: "relative",
                padding: "14px 0 32px 0"
            }}>
            {children}
            <Typography
                variant="body2"
                gutterBottom
                sx={{
                    fontSize: "14px",
                    color: `${isActive ? "#4E49D6" : "#6C737F"}`,
                    textAlign: "center"
                }}>
                {!isHidden && title}
            </Typography>
            {isActive &&
                <div style={{
                    height: "3px",
                    width: "68px",
                    backgroundColor: "#4E49D6",
                    position: "absolute",
                    top: "-4px"
                }}>
                </div>}
        </Stack>
    )
}
