"use client"
import CartHeader from '@/components/header/cart-header'
import React, { useState } from 'react'
import SettingItem from '../setting-option/setting-item'
import Stack from '@mui/material/Stack'
import EditName from '../components/edit-name'
import EditSex from '../components/edit-sex'
import EditEmail from '../components/edit-email'
import EditPhone from '../components/edit-phone'
import EditStudentCode from '../components/edit-student-code'
import EditMajor from '../components/edit-major'
import EditPeopleId from '../components/edit-people-id'
import EditDob from '../components/edit-dob'
import EditAddress from '../components/edit-address'

export default function PersonalProfileMobile() {
  const [currentScreen, setCurrentScreen] = useState<string>("overview")

  const handleBack = () => {
    setCurrentScreen("overview")
  }

  const RenderCurrentScreen = (screenName: string) => {
    const screenList = {
      overview: <OverviewScreen />,
      name: <EditName value='Nguyễn văn anh' handleBack={handleBack} />,
      sex: <EditSex value={0} handleBack={handleBack} />,
      email: <EditEmail value="nguyenvananh@iuh.com" handleBack={handleBack} />,
      phone: <EditPhone value="07968498589" handleBack={handleBack}/>,
      studentcode : <EditStudentCode value="1967584576" handleBack={handleBack}/>,
      major: <EditMajor value="Tài chính - Kế toán" handleBack={handleBack}/>,
      peopleID: <EditPeopleId value="345687940" handleBack={handleBack}/>,
      dob: <EditDob value="13/3/2000" handleBack={handleBack}/>,
      address: <EditAddress value="Số 57, đường số 7, quận Gò Vấp, tp. Hồ Chí Minh" handleBack={handleBack}/>
    }[screenName]
    return screenList
  }

  const OverviewScreen = () => (
    <div>

      <Stack spacing="5px" sx={{ backgroundColor: "#F5F5FA", height: "100vh", paddingTop: "70px" }}>
        <SettingItem title="Họ và tên" description='Nguyễn văn anh' onClick={() => setCurrentScreen("name")} />
        <SettingItem title="Giới tính" description='Nam' onClick={() => setCurrentScreen("sex")} />
        <SettingItem title="Ngày sinh" description='13/3/2000' onClick={() => setCurrentScreen("dob")} />
        <SettingItem title="Email" description='nguyenvananh@iuh.com' onClick={() => setCurrentScreen("email")} />
        <SettingItem title="Số điện thoại" description='07968498589' onClick={() => setCurrentScreen("phone")} />
        <SettingItem title="Địa chỉ" description='Số 57, đường số 7, quận Gò Vấp, tp. Hồ Chí Minh' onClick={() => setCurrentScreen("address")}/>
        <SettingItem title="Mã số sinh viên" description='1967584576' onClick={() => setCurrentScreen("studentcode")}/>
        <SettingItem title="Khoa" description='Tài chính - Kế toán' onClick={() => setCurrentScreen("major")}/>
        <SettingItem title="CMND/CMT" description='345687940' onClick={() => setCurrentScreen("peopleID")}/>
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
