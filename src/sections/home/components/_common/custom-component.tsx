"use client"
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const MainTitle = styled(Typography)<TypographyProps>(
    {
        textAlign: "center",
        fontSize: "72px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "120%",
        letterSpacing: "-0.72px",
    }
)
const TextDescription = styled(Typography)<TypographyProps>(
    {
        color: "#7E8492",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: "32px"
    }
)

export { MainTitle, TextDescription }