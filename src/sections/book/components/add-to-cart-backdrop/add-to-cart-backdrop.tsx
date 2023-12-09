import AddToCardIcon from '@/assets/icons/toast/add-to-card-icon'
import CustomBackdrop from '@/components/backdrop/custom-backdrop'
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function AddToCartBackdrop({ children, open }: { children: React.ReactNode, open: boolean }) {
    return (
        <CustomBackdrop
            state={open}
            insideComponent={
                <CenterVerticalLayout sx={{ backgroundColor: "rgba(17, 25, 39, 0.6)", borderRadius: "16px", width: "246px", height: "120px" }}>
                    <AddToCardIcon />
                    <Typography>Đã thêm tài liệu vào “Giỏ hàng”</Typography>
                </CenterVerticalLayout>}
        >
            {children}
        </CustomBackdrop>
    )
}
