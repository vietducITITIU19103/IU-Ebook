"use client"
import React, { useState } from 'react'
import ProfileBackground from '@/assets/icons/user/profile-background'
import Box from '@mui/material/Box';
import UploadAvatarFile from '@/components/hook-form/upload-image/setup-file/upload-avatar';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import CenterHorizontalLayout from '@/layout/component-base-layout/center-horizontal-layout';
import BackIcon from '@/assets/icons/arrow/back-icon';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import SettingItem from '../setting-option/setting-item';

export default function ProfileView() {
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

                <SettingItem title="Hồ sơ cá nhân" description='ewfhhiwer'/>
                <SettingItem title="Hồ sơ cá nhân" />
                <SettingItem title="Hồ sơ cá nhân" />
            </Stack>
        </Box>
    )
}
