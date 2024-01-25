"use client";
import React from 'react';
import Box from '@mui/material/Box';
//React-slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Carousel component
import { useCarousel } from '@/components/carousel';
import { Container, IconButton } from '@mui/material';
import { BookTypes } from '@/type/book/book-type';
import BookCard from '@/components/card/book-card';
import ToLeftIcon from '@/assets/icons/landing/to-left-icon';
import ToRightIcon from '@/assets/icons/landing/to-right-icon';
const book: BookTypes = {
    title: "Kế toán tài chính",
    type: "Kế toán",
    code: " MS 001",
    price: "65.000",
    download: "+3k",
    state: "none",
    isFavorite: false,
    isRecommend: true,
    isLoved: true,
    isLovedState: false
}

export default function LibCarousel({ images }: any) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        easing: 'ease-out',
        cssEase: 'ease',
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
    };
    const { onNext, onPrev, carouselRef } = useCarousel(settings);

    return (
            <Box sx={{
                marginBottom: "16px",
                width: "100%",
                ml: "3px",
                mt: "40px",
                position:"relative"
            }}>
                <IconButton onClick={onPrev} sx={{position: 'absolute', left: "-55px", top: "calc(50% - 39px)"}}><ToLeftIcon/></IconButton>
                <IconButton onClick={onNext} sx={{position: 'absolute', right: "-55px", top: "calc(50% - 39px)"}}><ToRightIcon/></IconButton>
                <Box sx={{ width: "100%", transition: "0.3s ease" }}>
                    <Slider {...settings} ref={carouselRef}>
                        <Box sx={{ px: "20px" }}><BookCard key={0} {...book} sx={{ flexShrink: 0, mb: "20px" }} /></Box>
                        <Box sx={{ px: "20px" }}><BookCard key={1} {...book} sx={{ flexShrink: 0, mb: "20px" }} /></Box>
                        <Box sx={{ px: "20px" }}><BookCard key={2} {...book} sx={{ flexShrink: 0, mb: "20px" }} /></Box>
                        <Box sx={{ px: "20px" }}><BookCard key={3} {...book} sx={{ flexShrink: 0, mb: "20px" }} /></Box>
                        <Box sx={{ px: "20px" }}><BookCard key={4} {...book} sx={{ flexShrink: 0, mb: "20px" }} /></Box>
                        <Box sx={{ px: "20px" }}><BookCard key={10} {...book} sx={{ flexShrink: 0, mb: "20px" }} /></Box>
                        <Box sx={{ px: "20px" }}><BookCard key={6} {...book} sx={{ flexShrink: 0, mb: "20px" }} /></Box>
                    </Slider>
                </Box>
            </Box>
    )
}
