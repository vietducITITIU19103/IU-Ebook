import React from 'react'
import SettingView from '@/sections/dashboard/setting/setting-view'
import PersonalProfileMobile from '@/sections/dashboard/setting/sub-view/personal-profile-mobile'
import Box from '@mui/material/Box'

export default function page() {
  return (

    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <PersonalProfileMobile />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SettingView tabIndex={0} />
      </Box>
    </>
  )
}
