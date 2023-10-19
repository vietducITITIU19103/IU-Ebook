import React from 'react'
import Stack, {StackProps} from '@mui/material/Stack';
import Box from '@mui/material/Box';
import StyledButton from '@/components/button/styled-button';
import DownloadIcon from '@/assets/icons/book/download-icon';
import Avatar from '@mui/material/Avatar';
import { BookTitle, BookType, AuthorName, AuthorEmail, AuthorTitle } from "../custom-component"
import TextWithIcon from '../text-with-icon';
import UploadIcon from '@/assets/icons/book/upload-icon';

export const RenderBookInfo = () => (
    <>
        <BookTitle component="h1">Giáo trình Kế toán Tài chính - Phần I</BookTitle>
        <BookType>Kế toán | MS 001</BookType>
        <Stack direction="row" justifyContent="flex-start" spacing="16px">
            <TextWithIcon icon={<UploadIcon />} text="Đang cập nhật" />
            <TextWithIcon icon={<DownloadIcon sx={{ width: "24px", height: "24px" }} color="#4E49D6" />} text="156 lượt mua" color="#4E49D6" />
        </Stack>
        <hr style={{ border: "0.5px solid #D8DBDF" }} />
        <RenderBookUploader />
    </>
)

export const RenderBookUploader = () => (
    <>
        <AuthorTitle>
            Đăng tải bởi
        </AuthorTitle>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="16px">
            <Avatar alt="Remy Sharp" src="/images/book/ketoantaichinh.png" sx={{ width: '48px', height: "48px" }} />
            <Box>
                <AuthorName>Ths. Trình Minh</AuthorName>
                <AuthorEmail>tranvancao@uih.edu.com</AuthorEmail>
            </Box>
        </Stack>
    </>
)

export const RenderControlButton = ({sx, ...other}: StackProps) => (
    <Stack direction="row" justifyContent="flex-start" spacing="18px" mt="20px" {...other}>
        <StyledButton label='Thêm vào giỏ hàng' width={170} bg='#4E49D6' />
        <StyledButton label='Mua với 56.000đ' width={170} bg='#F3633E' />
    </Stack>
)