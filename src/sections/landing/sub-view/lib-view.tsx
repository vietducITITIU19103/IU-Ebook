import React from 'react'
import Typography from '@mui/material/Typography'
import { typography } from '@/theme/typography';
import Stack from '@mui/material/Stack'
import { Box, Container } from '@mui/material';
import TabView from "./tab-view"
import BigStarIcon from '@/assets/icons/landing/big-star-icon';
import SmallStarIcon from '@/assets/icons/landing/small-star-icon';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';

export default function LibView() {
    return (
        <Box sx={{ backgroundColor: "#FFF7F5", py: "100px", my: "100px" }}>
            <Container>
                <CenterVerticalLayout>
                    <Stack
                        width="100%"
                        gap="16px"
                        alignItems="center"
                        position="relative"
                        sx={{ maxWidth: "400px", mb: "20px" }}
                    >
                        <Typography
                            sx={{
                                color: '#FE0000',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                textAlign: 'left',
                                lineHeight: '107%',
                                fontFamily: typography.fontFamilySecondary,
                            }}
                        >
                            Thư viện đa dạng
                        </Typography>
                        <Typography
                            component="h1"
                            sx={{
                                color: 'iub.text.table_title',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                textAlign: 'center',
                                fontFamily: typography.fontFamily,

                            }}
                        >
                            VỚI HƠN 3000 TÀI LIỆU CHẤT LƯỢNG CAO
                        </Typography>
                        <BigStarIcon sx={{ position: "absolute", top: "-10px", right: "-40px" }} />
                        <SmallStarIcon sx={{ position: "absolute", left: "-30px", bottom: "-5px" }} />
                    </Stack>
                </CenterVerticalLayout>
                <TabView />
            </Container>
        </Box>
    )
}

