"use client"
import React, { useMemo } from 'react'
import Stack from '@mui/material/Stack'
import { CartSubTitle, CartDescription, CartInfo, CartPrice } from '../components/custom-component'
import Box from '@mui/material/Box'
import MomoLogo from "@/assets/images/momo.png"
import ZaloLogo from "@/assets/images/zalo.png"
import VisaLogo from "@/assets/images/visa.png"
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import Radio, {RadioProps} from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const PaymentItem = (src: any, name: string, value: string) => (
    <Stack spacing="8px" direction="row" justifyContent="flex-start" alignItems="center"
        sx={{
            width: "100%",
            height: "54px",
            padding: "16px 24px 16px 16px",
            borderRadius: "12px",
            border: "1px solid #4E49D6",
            background: "#FFF"
        }}>
        <FormControlLabel value={value} control={<BpRadio />} label="" />
        <Image src={src} width={36} height={36} alt="logo"></Image>
        <CartDescription>{name}</CartDescription>
    </Stack>
)

const CardItem = (src: any, name: string, value: string, cardNumber: string) => (
    <Stack spacing="8px" direction="row" justifyContent="flex-start" alignItems="center"
        sx={{
            width: "100%",
            height: "54px",
            padding: "16px 24px 16px 16px",
            borderRadius: "12px",
            border: "1px solid #4E49D6",
            background: "#FFF"
        }}>
        <FormControlLabel value={value} control={<BpRadio />} label="" />
        <Image src={src} width={36} height={36} alt="logo"></Image>
        <Stack>
        <CartDescription>{name}</CartDescription>
        <CartDescription sx={{color: "#767676", fontSize: "12px"}}>{cardNumber}</CartDescription>
        </Stack>
    </Stack>
)

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#3F46D6',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });
  
  // Inspired by blueprintjs
  function BpRadio(props: RadioProps) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

export default function PaymentMethods() {
    return (
        <Box sx={{width: {xs: "100%",md: "560px"}}}>
            <CartSubTitle>Phương thức thanh toán</CartSubTitle>
            <Stack>

                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{ display: "flex", direction: "column", gap: "18px", color: "#3F46D6" }}
                    >
                        {PaymentItem(MomoLogo,"Momo","momo")}
                        {PaymentItem(ZaloLogo,"Zalopay","zalo")}
                        {CardItem(VisaLogo,"VISA","visa","**** **** **** 1234")}
                    </RadioGroup>
                </FormControl>
            </Stack>
        </Box>
    )
}


