'use client';
import React from 'react';
import Box from '@mui/material/Box';
//React-slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Carousel component
import { useCarousel } from '@/components/carousel';

export default function Carousel({ images }: any) {
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
    const { onNext, onPrev, carouselRef } = useCarousel(settings);

    return (
        <Box sx={{
            marginBottom: "16px",
            display: { xs: "block", md: "none" },
            width: "100%",
            ml: "3px",
            mt: "-16px !important"
        }}>

            <Box sx={{ width: "100%", transition: "0.3s ease" }}>
                <Slider {...settings} ref={carouselRef}>
                    {images.map((image: any, index: number) => (
                        <React.Fragment key={index}>
                            {
                                <img
                                    src={image}
                                    width="100%"
                                    height="100%"
                                    style={{

                                        objectFit: "contain",
                                        objectPosition: "center",

                                        ...(index === 1 && {
                                            position: "relative",
                                            top: "21px",
                                            width: "98%"
                                        }),
                                        ...(index === 2 && {
                                            position: "relative",
                                            top: "21px",
                                            width: "96.5%",
                                            left: "10px"
                                        })
                                    }} key={index} />
                            }</React.Fragment>
                    ))}

                </Slider>
            </Box>


        </Box>
    )
}
