import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const HeaderLink = styled(Typography)<TypographyProps & { href?: string }>(
    {
        color: "#475467",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "24px",
        transition: "color 0.3s ease",
        "&:hover": {
            color: "#006B5B",
        }
    }
)

export {HeaderLink}