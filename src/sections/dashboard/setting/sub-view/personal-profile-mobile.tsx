"use client"
import CartHeader from '@/components/header/cart-header'
import React, { useState } from 'react'
import SettingItem from '../setting-option/setting-item'
import Stack from '@mui/material/Stack'
import EditName from '../components/edit-name'
import EditSex from '../components/edit-sex'

export default function PersonalProfileMobile() {
  const [currentScreen, setCurrentScreen] = useState<string>("overview")

  const handleBack = () => {
    setCurrentScreen("overview")
  }

  const RenderCurrentScreen = (screenName: string) => {
    const screenList = {
      overview: <OverviewScreen />,
      name: <EditName value='Nguyễn văn anh' handleBack={handleBack} />,
      sex: <EditSex value={0} handleBack={handleBack} />
    }[screenName]
    return screenList
  }

  const OverviewScreen = () => (
    <div>

      <Stack spacing="5px" sx={{ backgroundColor: "#F5F5FA", height: "100vh", paddingTop: "70px" }}>
        <SettingItem title="Họ và tên" description='Nguyễn văn anh' onClick={() => setCurrentScreen("name")} />
        <SettingItem title="Giới tính" description='Nam' onClick={() => setCurrentScreen("sex")} />
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
  return (
    <>
      <CartHeader
        title="Hồ sơ cá nhân"
        isHandleBack
        isHandleLogic={currentScreen !== "overview"}
        handleBack={handleBack} />
      {RenderCurrentScreen(currentScreen)}
    </>

  )
}
