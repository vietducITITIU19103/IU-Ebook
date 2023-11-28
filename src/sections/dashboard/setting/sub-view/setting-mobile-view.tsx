"use client"
import React, { useState } from 'react'
import ProfileBackground from '@/assets/icons/user/profile-background'
import Box from '@mui/material/Box';
import UploadAvatarFile from '@/components/hook-form/upload-image/setup-file/upload-avatar';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import Stack from '@mui/material/Stack';
import SettingItem from '../setting-option/setting-item';
import { useRouter } from 'next/navigation';
import BottomNavBar from '@/components/mobile-footer';

export default function SettingMobileView() {
    const router = useRouter()
    const [file, setFile] = useState<string | File>("https://i.pinimg.com/236x/58/1a/53/581a53d4601b8ea60e9f42653cbc1e63.jpg")
    return (
        <Box sx={{ height: "100vh" }}>
            <CenterVerticalLayout sx={{ position: 'relative' }}>
                <ProfileBackground />
                <UploadAvatarFile
                    accept="image/*"
                    file={file}
                    onDrop={React.useCallback((acceptedFiles: File) => {
                        const file = acceptedFiles;
                        if (file) {
                            setFile(file);
                        }
                    }, [])}
                    error={false}
                    onRemove={() => { setFile("") }}
                    isUseButton={false}
                    isMobile={true}
                />

            </CenterVerticalLayout>
            <Stack spacing="5px" sx={{ marginTop: "170px" }}>
                <SettingItem title="Hồ sơ cá nhân" onClick={()=>router.push("/dashboard/setting/personal-profile/")}/>
                <SettingItem title="Thay đổi mật khẩu" onClick={()=>router.push("/dashboard/setting/change-password/")}/>
                <SettingItem title="Cài đặt hệ thống" onClick={()=>router.push("/dashboard/setting/system-setting/")}/>
            </Stack>
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    justifyContent: "center",
                    backgroundColor: "white"
                }}
            >
                <BottomNavBar />
            </Box>
        </Box>
    )
}
