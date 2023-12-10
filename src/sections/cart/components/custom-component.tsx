"use client"
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { typography } from '@/theme/typography';


const CartTitle = styled(Typography)<TypographyProps>(({ theme }) => (
    {
        color: "#352CBE",
        fontSize: "24px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "-0.48px",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        }
    }
));
const CartDescription = styled(Typography)<TypographyProps>(({ theme }) => (
    {
        color: "#1F2A37",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "140%",
        letterSpacing: "0.4px",
        fontFamily: typography.fontFamilySecondary,
        [theme.breakpoints.down("md")]: {
            textAlign: "center"
        }
    }
))

const CartInfo = styled(CartDescription)<TypographyProps>(({ theme }) => (
    {
        fontWeight: 500,
    }
))

const CartPrice = styled(Typography)<TypographyProps>(({ theme }) => (
    {
        color: "#F3633E",
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "140%"
    }
))

const CartSubTitle = styled(Typography)<TypographyProps>(({ theme }) => (
    {
        color: "#6C737F",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "20px",
        marginBottom: "16px",
        [theme.breakpoints.down("md")]: {
            marginBottom: "10px",
        }
    }
))




export { CartTitle, CartDescription, CartInfo, CartPrice, CartSubTitle }