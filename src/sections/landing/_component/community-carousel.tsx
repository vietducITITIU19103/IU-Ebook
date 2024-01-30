"use client";
import React from 'react';
import Box from '@mui/material/Box';
//React-slick
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Carousel component
import { useCarousel } from '@/components/carousel';
import { IconButton, Stack, Typography } from '@mui/material';
import SimpleBookCard from '@/components/card/simple-bookcard';
import ToLeftIcon from '@/assets/icons/landing/to-left-icon';
import ToRightIcon from '@/assets/icons/landing/to-right-icon';
import RatingIcon from '@/assets/icons/landing/rating-icon';
import { typography } from '@/theme/typography';

export default function CommunityCarousel({ images }: any) {
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
            width: "100%",
            ml: "3px",
            mt: "40px",
            position: "relative"
        }}>
            <IconButton onClick={onPrev} sx={{ position: 'absolute', left: "-85px", top: "calc(50% - 39px)", display: { xs: "none", sm: "block" } }}><ToLeftIcon /></IconButton>
            <IconButton onClick={onNext} sx={{ position: 'absolute', right: "-85px", top: "calc(50% - 39px)", display: { xs: "none", sm: "block" } }}><ToRightIcon /></IconButton>
            <Box sx={{ width: "100%", transition: "0.3s ease" }}>
                <Slider {...settings} ref={carouselRef}>
                    <Stack>
                        <Typography sx={{ color: 'iub.text.table_title', fontSize: "24px", fontWeight: 700 }}>Nguyễn Văn Anh</Typography>
                        <Typography sx={{ color: 'iub.text.table_title', fontSize: "18px", fontWeight: 400, mb: "16px" }}>Sinh viên khóa 20 - Khoa Kế toán kiểm toán</Typography>
                        <Stack direction="row" justifyContent="flex-start" alignItems="center" gap="8px" mb="5px">
                            <Typography sx={{ color: '#000000',fontSize: "18px", fontWeight: 600, fontFamily: typography.fontFamilySecondary}}>Đánh giá</Typography>
                            <Stack direction="row" justifyContent="flex-start">
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                            </Stack>
                        </Stack>
                        <Typography sx={{ color: '#1F2A37', fontSize: "18px", fontWeight: 400, fontFamily: typography.fontFamilySecondary, }}>Việc học của tôi trở nên dễ dàng hơn từ ngày sử dụng UIH Books. Công cụ này giúp tôi tải về những tài liệu thầy cô đã biên soạn và chỉnh sửa. Hơn nữa, thói quen sử dụng sách mềm từ lâu đã trở nên quen thuộc hơn. Tôi rất thích và tôi cũng luôn khuyến khích bạn bè sử dụng  UIH Books.</Typography>
                    </Stack>
                    <Box>
                        gdrhd
                    </Box>
                </Slider>
            </Box>
        </Box>
    )
}
