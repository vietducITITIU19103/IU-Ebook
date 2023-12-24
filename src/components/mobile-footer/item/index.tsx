import React, {useContext} from 'react'
import Stack, {StackProps} from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeContext } from '@/theme';

export default function Item({ children, title, isActive, isHidden, ...other}: StackProps & { children: React.ReactNode, title: string, isActive?: Boolean, isHidden?: Boolean }) {
    const {palette: {iub: {text}}} = useContext(ThemeContext)
    return (
        <Stack
            direction="column"
            spacing="2px"
            alignItems="center"
            justifyContent="center"
            sx={{
                position: "relative",
                padding: "14px 0 32px 0",
                cursor: "pointer"
            }}
            {...other}
            >
            {children}
            <Typography
                variant="body2"
                gutterBottom
                sx={{
                    fontSize: "14px",
                    color: `${isActive ? "iub.text.active" : "#6C737F"}`,
                    textAlign: "center"
                }}>
                {!isHidden && title}
            </Typography>
            {isActive &&
                <div style={{
                    height: "3px",
                    width: "68px",
                    backgroundColor: text.active,
                    position: "absolute",
                    top: "-4px"
                }}>
                </div>}
        </Stack>
    )
}
