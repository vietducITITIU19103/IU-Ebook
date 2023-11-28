"use client"
import CartHeader from '@/components/header/cart-header'
import React from 'react'
import SettingItem from '../setting-option/setting-item'
import { useRouter } from 'next/navigation'
import Stack from '@mui/material/Stack'

export default function PersonalProfileMobile() {
  const router = useRouter()
  return (
    <div>
      <CartHeader title="Hồ sơ cá nhân" />
      <Stack spacing="5px" sx={{backgroundColor: "#F5F5FA", height: "100vh",paddingTop: "70px"}}>
        <SettingItem title="Họ và tên" description='Nguyễn văn anh' />
        <SettingItem title="Giới tính" description='Nam' />
        <SettingItem title="Ngày sinh" description='13/3/2000' />
        <SettingItem title="Email" description='nguyenvananh@iuh.com' />
        <SettingItem title="Số điện thoại" description='07968498589' />
        <SettingItem title="Địa chỉ" description='Số 57, đường số 7, quận Gò Vấp, tp. Hồ Chí Minh' />
        <SettingItem title="Mã số sinh viên" description='1967584576' />
        <SettingItem title="Khoa" description='Tài chính - Kế toán' />
        <SettingItem title="CMND/ CMT" description='345687940' />
      </Stack>
    </div>
  )
}
