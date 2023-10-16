'use client';
import React from 'react';
//Mui component
import Box from '@mui/material/Box';
//React-slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Carousel component
import CarouselItem from './carousel-item';
import { useCarousel } from '@/components/carousel';
import BreadcrumIcon from '@/assets/icons/arrow/breadcrum-icon';
import FullscreenIcon from '@/assets/icons/book/fullscreen-icon';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import IconButton from '@mui/material/IconButton';


var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    easing: 'ease-out',
    cssEase: 'ease',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
};

export default function CarouselSection() {
    const { onNext, onPrev, carouselRef } = useCarousel(settings);
    return (
        <Box
            sx={{
                display: `flex`,
                width: '100%', 
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <IconButton sx={{position: "absolute", top: "calc(50% - 16px)", right: "-40px", zIndex: 2, width: "35px", height: '35px'}}>
            <BreadcrumIcon />
            </IconButton>
            <IconButton sx={{position: "absolute", top: "calc(50% - 16px)", left: "-40px", zIndex: 2, transform: "rotate(180deg)", width: "35px", height: '35px'}}>
            <BreadcrumIcon />
            </IconButton>
            <IconButton sx={{p:"5px", backgroundColor: "rgba(0, 0, 0, 0.6)", position: "absolute", zIndex: '2', borderRadius: '50%'}}>
            <FullscreenIcon/>
            </IconButton>
            
            <Box sx={{ width: "100%", transition: "0.3s ease", maxHeight: '420px' }}>
                <Slider {...settings} ref={carouselRef}>
                    {/* {users.map((item: CarouselProps) => (
                        <CarouselItem key={item.id} />
                    ))} */}
                    <CarouselItem />
                </Slider>
            </Box>
            
        </Box>
    );
}
