import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { typography } from '@/theme/typography';
import Login from '@/assets/images/Login.png';
import BagIcon from '@/assets/icons/bag-icon';
import { BgContainer, CustomBox } from './custom-component';

export default function LoginBanner() {
  return (
    <>
      <BgContainer/>
          <Stack
            direction="column"
            alignItems="flex-start"
            sx={{
              position: 'absolute',
              bottom: '60px',
              left:'-30px',
            }}
          >
            <Image
              src={Login}
              alt="Register logo"
              style={{
                width: '636px',
                height: 'auto',
              }}
            ></Image>
            <CustomBox>
            <Typography
              sx={{
                color: '#0D006A',
                marginTop: '20px',
                fontSize: '36px',
                fontStyle: 'normal',
                fontWeight: 500,
                textAlign: 'left',
                lineHeight: '107%',
                fontFamily: typography.fontFamilySecondary,
                
              }}
            >
              Kho tài liệu
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#0D006A',
                marginTop: '20px',
                fontSize: '56px',
                fontStyle: 'normal',
                fontWeight: 700,
                letterSpacing: '1.4px',
                lineHeight: '107%',
                marginBottom: '24px',
                fontFamily: typography.fontFamily,
              }}
            >
              THẮP SÁNG <br /> TƯƠNG LAI
            </Typography>
            <Stack direction="row" spacing="18px" sx={{backgroundColor: "#D15555", border: "5px solid #FF7575", borderRadius: "80px", width: "400px", py:"10px", px:"20px"}}>
              <BagIcon sx={{width: "40px", height: "41px"}}/>
              <Typography
              variant="h2"
              sx={{
                color: '#fff',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '138%',
                fontFamily: typography.fontFamily,
                
              }}
            >
              với hơn 2k bộ tài liệu chất lượng <br/>từ giảng viên
            </Typography>
            </Stack>
            </CustomBox>
          </Stack>
    </>
  )
}
