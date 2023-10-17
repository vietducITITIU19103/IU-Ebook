"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { CustomTabPanel, StyledTab, StyledTabs, MainLayout } from './custom-component';
import "./style.css"
import CarouselSection from '../carousel-section/carousel';

const book = {
    title: "Kế toán tài chính",
    type: "Kế toán",
    code: " MS 001",
    price: "65.000",
    download: "+3k",
    isBought: false,
    isFavorite: false,
    isRecommend: false
}


export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', borderRadius: "16px", border: "1px solid #D8DBDF", my: "36px" }}>
            <Box >
                <Box sx={{ overflowX: "scroll" }} className="scroll">
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="styled tabs example"
                    >
                        <StyledTab label="Xem trước" />
                        <StyledTab label="Mô tả" />
                    </StyledTabs>
                </Box>
                <MainLayout>
                    <CustomTabPanel value={value} index={0} width={680}>
                        <CarouselSection />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1} width={916}>
                        <Box sx={{ width: "100%" }}>
                            <Box sx={{ width: '916px' }}>
                                <p>
                                    Tư duy và phong cách quản trị dựa trên nền tảng kế toán tài chính đang trở nên cần thiết trong việc đảm bảo sự phát triển bền vững và tăng trưởng của doanh nghiệp. Những người thành công trong kinh doanh là người có “tư duy kế toán” theo cách riêng của họ. Kế toán không quá phức tạp, chỉ cần bạn hiểu những điểm quan trọng, kế toán sẽ là một công cụ hỗ trợ mạnh hơn bất cứ thứ gì trong kinh doanh.
                                    Trong cuốn sách Tư duy kế toán phải có trong kinh doanh này, bạn sẽ nắm được:
                                </p>
                                <ul>
                                    <li>Những điểm mấu chốt của báo cáo tài chính</li>
                                    <li>Tư duy về “cơ cấu lợi nhuận” và “thu chi tiền mặt”</li>
                                    <li>Cách sử dụng “số liệu kế toán” hữu ích trong doanh nghiệp</li>
                                    <li>Quay vòng PCDA với kế toán để đạt được mục tiêu đặt ra</li>
                                </ul>
                                <p>
                                    Tư duy kế toán phải có trong kinh doanh là cuốn sách mà bất kỳ nhà quản trị nào hoặc những người đang hoạt động trong lĩnh vực kế toán nên tham khảo thêm.
                                    Takaharu Yasumoto sinh năm 1954 tại Shizuoka. Năm 1976, ông tốt nghiệp trường Đại học Waseda khoa Thương mại. Ông gặt hái được nhiều thành công trong lĩnh vực kế toán với các vị trí như tư vấn tài chính hay kiểm toán. Kế toán không quá phức tạp, chỉ cần bạn hiểu những điểm quan trọng, kế toán sẽ là một công cụ hỗ trợ mạnh hơn bất cứ thứ gì trong kinh doanh.  Tư duy kế toán phải có trong kinh doanh là cuốn sách mà bất kỳ nhà quản trị nào hoặc những người đang hoạt động trong lĩnh vực kế toán nên tham khảo thêm...
                                </p>
                            </Box>
                        </Box>

                    </CustomTabPanel>
                </MainLayout>
            </Box>
        </Box>
    );
}