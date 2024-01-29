"use client";
import React from 'react';
import Box from '@mui/material/Box';
//React-slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Carousel component
import { useCarousel } from '@/components/carousel';
import { IconButton } from '@mui/material';
import { BookTypes } from '@/type/book/book-type';
import SimpleBookCard from '@/components/card/simple-bookcard';
import ToLeftIcon from '@/assets/icons/landing/to-left-icon';
import ToRightIcon from '@/assets/icons/landing/to-right-icon';

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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const { onNext, onPrev, carouselRef } = useCarousel(settings);

    return (
        <Box sx={{
            marginBottom: "16px",
            width: "100%",
            ml: "3px",
            mt: "40px",
            position: "relative"
        }}>
            <IconButton onClick={onPrev} sx={{ position: 'absolute', left: "-55px", top: "calc(50% - 39px)", display: {xs:"none",sm: "block"} }}><ToLeftIcon /></IconButton>
            <IconButton onClick={onNext} sx={{ position: 'absolute', right: "-55px", top: "calc(50% - 39px)" , display: {xs:"none",sm: "block"} }}><ToRightIcon /></IconButton>
            <Box sx={{ width: "100%", transition: "0.3s ease" }}>
                <Slider {...settings} ref={carouselRef}>
                    <Box sx={{ px: {xs:"35px",sm: "20px"} }}><SimpleBookCard key={0} id="1" src={"/images/book/ketoan.png"} /></Box>
                    <Box sx={{ px: {xs:"35px",sm: "20px"} }}><SimpleBookCard key={0} id="1" src={"/images/book/ketoan.png"} /></Box>
                    <Box sx={{ px: {xs:"35px",sm: "20px"} }}><SimpleBookCard key={0} id="1" src={"/images/book/ketoan.png"} /></Box>
                    <Box sx={{ px: {xs:"35px",sm: "20px"} }}><SimpleBookCard key={0} id="1" src={"/images/book/ketoan.png"} /></Box>
                    <Box sx={{ px: {xs:"35px",sm: "20px"} }}><SimpleBookCard key={0} id="1" src={"/images/book/ketoan.png"} /></Box>
                    <Box sx={{ px: {xs:"35px",sm: "20px"} }}><SimpleBookCard key={0} id="1" src={"/images/book/ketoan.png"} /></Box>
                    <Box sx={{ px: {xs:"35px",sm: "20px"} }}><SimpleBookCard key={0} id="1" src={"/images/book/ketoan.png"} /></Box>
                </Slider>
            </Box>
        </Box>
    )
}
