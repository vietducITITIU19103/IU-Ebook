import React from 'react'
import SettingView from '@/sections/dashboard/setting/setting-view'
import Box from '@mui/material/Box'
import SystemSetting from '@/sections/dashboard/setting/sub-view/system-setting'

export default function page() {
  return (

    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <SystemSetting />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SettingView tabIndex={2} />
      </Box>
    </>
  )
}
