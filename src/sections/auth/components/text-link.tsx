import React from 'react'
import Typography, {TypographyProps} from '@mui/material/Typography';

type TextLinkProps = TypographyProps & {
    label: string;
    href: string
}

export default function TextLink({label, href, sx, ...other}: TextLinkProps) {
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
                ...sx
            }}
            {...other}
        >
            {label}
        </Typography>
    )
}
