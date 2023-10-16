"use client"
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { typography } from '@/theme/typography';

const BookTitle = styled(Typography)<TypographyProps>(
    {
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 700,
        fontFamily: "inherit",
        color: "#1F2A37",
        lineHeight: "130%"
    }
)
const BookType = styled(Typography)<TypographyProps>(
    {
        color: "#6C737F",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "170%",
        fontFamily: typography.fontFamilySecondary
    }
)

const AuthorName = styled(Typography)<TypographyProps>(
    {
        color: "#1A1A1A",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "normal",
        fontFamily: typography.fontFamilySecondary
    }
)


const AuthorEmail = styled(Typography)<TypographyProps>(
    {
        color: "#6C737F",
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: "normal",
        fontFamily: typography.fontFamilySecondary
    }
)

const AuthorTitle = styled(Typography)<TypographyProps>(
    {
        fontSize: "14px", 
        color: "#9DA4AE", 
        fontWeight: 400, 
        lineHeight: "170%",
        fontFamily: typography.fontFamilySecondary
    }
)
export { BookTitle, BookType, AuthorName, AuthorEmail, AuthorTitle }