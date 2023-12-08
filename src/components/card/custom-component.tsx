"use client"
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { typography } from '@/theme/typography';
import Card, { CardProps } from '@mui/material/Card'

const CustomCard = styled(Card)<CardProps>(
    {
        backgroundColor: "black !important",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        cursor: "pointer",
    }
)

const RecommendContainer = styled(Box)<BoxProps>(
    {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        top: "-100px"
    }
)

const BookTitle = styled(Typography)<TypographyProps>(
    {
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "inherit",
        color: "inherit"
    }
)

const BookType = styled(Typography)<TypographyProps>(
    {
        fontSize: "10px",
        fontFamily: "inherit",
        color: "inherit"
    }
)

const BookState = styled(Typography)<TypographyProps>(
    {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#4E49D6",
        fontFamily: "inherit",
    }
)

const BookPrice = styled(Typography)<TypographyProps>(
    {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#F3633E",
        position: "relative",
        fontFamily: "inherit",
        top: "3.5px"
    }
)

const BookRCM = styled(Typography)<TypographyProps>(
    {
        fontSize: "12px",
        fontWeight: "500",
        color: "white",
        position: "absolute",
        paddingLeft: "7px",
        fontFamily: "inherit"
    }
)

const BookFVR = styled(Typography)<TypographyProps>(
    {
        fontSize: "12px",
        fontWeight: "500",
        color: "white",
        position: "absolute",
        zIndex: "3",
        top: "6px",
        right: "6px"
    }
)

export { CustomCard, BookTitle, BookType, BookState, BookPrice, RecommendContainer, BookRCM, BookFVR }
