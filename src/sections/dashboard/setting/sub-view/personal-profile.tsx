'use client';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import FormProvider from '@/components/hook-form';
import RHFTextField from '@/components/hook-form/rhf-text-field';
import Stack from '@mui/material/Stack';
import InputContainer from '@/sections/auth/components/input-container';
import Grid from '@mui/material/Grid';
import RHFSelectWithoutIcon from '@/components/hook-form/rhf-select-without-icon';
import StyledButton from '@/components/button/styled-button';
import CommonGridLayout from '../_common/common-grid-layout';
import UploadAvatar from '@/components/hook-form/upload-image/upload-avatar';

const selectData: { value: number; label: string; }[] = [
    { value: 0, label: "Chọn giới tính" },
    { value: 1, label: "Nữ" },
    { value: 2, label: "Nam" },
    { value: 3, label: "Khác" }
]

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function PersonalProfile() {


    const ProfileSettingSchema = Yup.object().shape({
        name: Yup.string().required("Vui lòng nhập họ và tên"),
        address: Yup.string().required("Vui lòng nhập địa chỉ"),
        sex: Yup.number().notOneOf([0], "Vui lòng chọn giới tính"),
        studentID: Yup.string().optional(),
        DOB: Yup.string().required("Vui lòng nhập ngày sinh"),
        email: Yup.string().email("Địa chỉ email không hợp lệ").required("Vui lòng nhập email"),
        phone: Yup.string().matches(phoneRegExp, "Số điện thoại không hợp lệ").required("Vui lòng nhập số điện thoại"),
        major: Yup.string().optional(),
        peopleID: Yup.string().optional(),
        avt: Yup.mixed().optional(),
    });

    const defaultValues = {
        name: "",
        address: "",
        sex: 0,
        studentID: "",
        DOB: "",
        email: "",
        phone: "",
        major: "",
        peopleID: "",
        avt: "https://i.pinimg.com/236x/58/1a/53/581a53d4601b8ea60e9f42653cbc1e63.jpg",
    };

    const methods = useForm({
        resolver: yupResolver(ProfileSettingSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            // await login?.(data.username, data.password);
        } catch (error) {
            reset();
        }
    });

    return (
        <CommonGridLayout>
            <FormProvider methods={methods} onSubmit={onSubmit}>
                <Stack direction={{xs:"column", lg:"row"}} justifyContent={{xs:"center", lg:"space-between"}}  alignItems={{xs:"center", lg:"flex-start"}} spacing={{xs:"0", lg:"10px"}}>
                    <UploadAvatar name="avt" />
                    <Grid container  mt="10px" columnSpacing={{xs:"20px", lg:"48px"}} rowSpacing="24px" sx={{position: "relative", right: "10px"}}>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="Họ và tên" isRequired>
                                <RHFTextField name="name" placeholder="Điền họ và tên ở đây" />
                            </InputContainer>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="Địa chỉ" isRequired>
                                <RHFTextField name="address" placeholder="Điền địa chỉ ở đây" />
                            </InputContainer>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="Giới tính" isRequired>
                                <RHFSelectWithoutIcon name="sex" placeholder="Chọn giới tính" data={selectData} defaultValue={0} />
                            </InputContainer>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="Mã số sinh viên" >
                                <RHFTextField name="studentID" placeholder="Điền mã số sinh viên ở đây" />
                            </InputContainer>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="Ngày sinh" isRequired>
                                <RHFTextField name="DOB" placeholder="Điền ngày sinh ở đây" />
                            </InputContainer>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="Khoa" >
                                <RHFTextField name="major" placeholder="Điền tên khoa ở đây" />
                            </InputContainer>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="Email" isRequired>
                                <RHFTextField name="email" placeholder="Điền email ở đây" />
                            </InputContainer>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="CCCD/CMND" >
                                <RHFTextField name="peopleID" placeholder="Điền số CMT/CCCD ở đây" />
                            </InputContainer>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <InputContainer label="Số điện thoại" isRequired>
                                <RHFTextField name="phone" placeholder="Điền số điện thoại ở đây" />
                            </InputContainer>
                        </Grid>

                    </Grid>
                </Stack>


                <Stack direction="column" spacing="16px" alignItems="flex-end" mt="36px" position="relative" right="5px">
                    <StyledButton label='Cập nhật' width={170} bg='#4E49D6' type='submit' />
                </Stack>
            </FormProvider>
        </CommonGridLayout>

    );
}
