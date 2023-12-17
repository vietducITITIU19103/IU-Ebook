import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const HeaderLink = styled(Typography)<TypographyProps & { href?: string }>(
    {
        color: "iub.text.normal",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "24px",
        transition: "color 0.3s ease",
        "&:hover": {
            color: "#4E49D6",
        }
    }
)

export {HeaderLink}