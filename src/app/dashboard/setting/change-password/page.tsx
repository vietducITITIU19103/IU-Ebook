import React from 'react'
import SettingView from '@/sections/dashboard/setting/setting-view'
import ChangePassword from '@/sections/dashboard/setting/sub-view/change-password'
import Box from '@mui/material/Box'

export default function page() {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <ChangePassword />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SettingView tabIndex={1} />
      </Box>
    </>

  )
}
