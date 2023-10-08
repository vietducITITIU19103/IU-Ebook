import React from 'react'
import Typography from '@mui/material/Typography';

type TextLinkProps = {
    label: string;
    href: string
}

export default function TextLink({label, href}: TextLinkProps) {
    return (
        <Typography
            component="a"
            href={href}
            variant="subtitle1"
            sx={{
                color: "#4E49D6",
                fontWeight: 700,
                fontSize: "16px",
                "&:hover": {
                    textDecoration: "underline",
                },
            }}
        >
            {label}
        </Typography>
    )
}
