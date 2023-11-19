
import React from 'react'
import DashboardLayout from '@/layout/dashboard/dashboard-layout'
import { Container } from '@mui/material'
import AuthGuard from '@/auth/guard/auth-guard'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    // <AuthGuard>
    <DashboardLayout>{children}</DashboardLayout>
    // </AuthGuard>
    
  )
}
