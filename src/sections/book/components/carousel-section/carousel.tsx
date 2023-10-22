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
import ControlButton from './control-button';
import CenterHorizontalLayout from '@/layout/component-base-layout/center-horizontal-layout';
import { useResponsive } from '@/hooks/use-responsive';

export default function CarouselSection() {
    const MdDown = useResponsive("down", "md");
    var settings = {
        dots: MdDown ? true : false,
        infinite: true,
        speed: 600,
        easing: 'ease-out',
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
    };
    const { onNext, onPrev, carouselRef } = useCarousel(settings);
    return (
        <Box
            sx={{
                display: `flex`,
                width: '100%',
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                p: "0",
                mt: { xs: "0", md: "20px" },
                mb: { xs: "20px", md: "0" },
            }}
        >
            <ControlButton sx={{ right: {xs: 0, md: "-40px"} }} onClick={onNext}>
                <BreadcrumIcon />
            </ControlButton>
            <ControlButton sx={{ left: {xs: 0, md: "-40px"}, transform: "rotate(180deg)" }} onClick={onPrev}>
                <BreadcrumIcon />
            </ControlButton>
            <IconButton sx={{ p: "5px", backgroundColor: "rgba(0, 0, 0, 0.6)", position: "absolute", zIndex: '2', borderRadius: '50%' }}>
                <FullscreenIcon />
            </IconButton>

            <Box sx={{ width: "100%", transition: "0.3s ease", height: { xs: "260px", sm: "360px", md: "420px" } }}>
                <Slider {...settings} ref={carouselRef}>
                    {/* {users.map((item: CarouselProps) => (
                        <CarouselItem key={item.id} />
                    ))} */}
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Slider>
            </Box>


        </Box>
    );
}
