import BackIcon from '@/assets/icons/arrow/back-icon'
import CenterHorizontalLayout from '@/layout/component-base-layout/center-horizontal-layout'
import Typography from '@mui/material/Typography'
import React from 'react'
import { StackProps } from '@mui/material/Stack'
import Stack from '@mui/system/Stack'
import { typography } from '@/theme/typography';
import { useContext } from 'react';
import { ThemeContext } from '@/theme';

type Props = StackProps & {
    title: string,
    description?: string
}

export default function SettingItem({ title, description, ...other }: Props) {
    const {palette: {iub: {text}}} = useContext(ThemeContext)
    return (
        <CenterHorizontalLayout
            justifyContent="space-between"
            sx={{
                backgroundColor: "iub.background.default",
                p: "12px",
                pr: "6px",
                cursor: "pointer",
                transition: "0.2s ease",
                "&:hover": { backgroundColor: "iub.background.item_hover" }
            }}
            {...other}
        >
            <Stack>
                <Typography sx={{ color: "iub.text.main" }}>{title}</Typography>
                {description && <Typography sx={{
                    color: "#6C737F",
                    fontFamily: typography.fontFamilySecondary,
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                }}>{description}</Typography>}
            </Stack>
            <BackIcon color={text.main} sx={{ transform: "rotate(180deg)", top: "2px" }} />
        </CenterHorizontalLayout>
    )
}
