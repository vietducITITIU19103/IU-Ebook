import { styled } from '@mui/material/styles';
import LoginBg from '@/assets/icons/login-bg';
import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { typography } from '@/theme/typography';

const NameText = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: "#1F2A37",
    fontFamily: "inherit",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal"
}));


const DateText = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: "#9DA4AE",
    fontFamily: typography.fontFamilySecondary,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px"
}));

const SubtitleText = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: "#0D006A",
    fontFamily: typography.fontFamilySecondary,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "22.4px",
    letterSpacing: "0.4px"
}));

const SubDesText = styled(DateText)<TypographyProps>(({ theme }) => ({
    color: "#1F2A37"
}));

export { DateText, SubtitleText, SubDesText, NameText }