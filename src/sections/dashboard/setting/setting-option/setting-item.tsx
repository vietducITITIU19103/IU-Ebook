import BackIcon from '@/assets/icons/arrow/back-icon'
import CenterHorizontalLayout from '@/layout/component-base-layout/center-horizontal-layout'
import Typography from '@mui/material/Typography'
import React from 'react'
import { StackProps } from '@mui/material/Stack'
import Stack from '@mui/system/Stack'
import { typography } from '@/theme/typography';

type Props = StackProps & {
    title: string,
    description?: string
}

export default function SettingItem({ title, description }: Props) {
    return (
        <CenterHorizontalLayout justifyContent="space-between" sx={{ backgroundColor: "white", p: "12px", pr: "6px", cursor: "pointer", transition: "0.2s ease", "&:hover": { backgroundColor: "rgba(31, 42, 55, 0.05)" } }}>
            <Stack>
                <Typography>{title}</Typography>
                {description && <Typography sx={{
                    color: "#6C737F",
                    fontFamily: typography.fontFamilySecondary,
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                }}>{description}</Typography>}
            </Stack>
            <BackIcon color="black" sx={{ transform: "rotate(180deg)", top: "2px" }} />
        </CenterHorizontalLayout>
    )
}
