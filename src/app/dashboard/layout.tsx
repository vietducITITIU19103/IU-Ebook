
import React from 'react'
import DashboardLayout from '@/layout/dashboard/dashboard-layout'
import { Container } from '@mui/material'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <DashboardLayout>{children}</DashboardLayout>
    
  )
}
