"use client"
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { typography } from '@/theme/typography';

const PromotionTitle = styled(Typography)<TypographyProps>(
    {
        fontFamily: "inherit",
        color: "#1F2A37",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "20px",
    }
)

const PromotionDescription = styled(Typography)<TypographyProps>(
    {
        color: "#9DA4AE",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "20px",
        fontFamily: typography.fontFamilySecondary
    }
)

const LogoDescription = styled(Typography)<TypographyProps>(
    {
        color: "#9DA4AE",
        fontFamily: "Bitter",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "20px"
    }
)

const PromotionExpire = styled(PromotionDescription)<TypographyProps>(
    {
        color: "#1F2A37",
    }
)

export { PromotionTitle, PromotionDescription, PromotionExpire, LogoDescription }
