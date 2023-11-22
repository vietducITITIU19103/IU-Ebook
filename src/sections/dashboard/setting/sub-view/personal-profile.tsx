'use client';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import FormProvider from '@/components/hook-form';
import RHFTextField from '@/components/hook-form/rhf-text-field';
import Stack from '@mui/material/Stack';
import InputContainer from '@/sections/auth/components/input-container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import RHFSelectWithoutIcon from '@/components/hook-form/rhf-select-without-icon';
import StyledButton from '@/components/button/styled-button';

const selectData: { value: number; label: string; }[] = [
    { value: 0, label: "Chọn giới tính" },
    { value: 1, label: "Nữ" },
    { value: 2, label: "Nam" },
    { value: 3, label: "Khác" }
]

export default function PersonalProfile() {


    const LoginSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const defaultValues = {
        username: 'admin',
        password: '1',
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
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
        <ThemeProvider
            theme={createTheme({
                breakpoints: {
                    values: {
                        xs: 0,
                        xssm: 450,
                        sm: 600,
                        smmd: 800,
                        md: 900,
                        mdlg: 1100,
                        lg: 1200,
                        xl: 1500,
                    },
                },
            })}
        >
            <FormProvider methods={methods} onSubmit={onSubmit}>
                <Grid container spacing={2} mt="10px" columnSpacing="48px" rowSpacing="24px">
                    <Grid item xs={12} md={6} sx={{ width: "100%" }}>
                        <InputContainer label="Họ và tên" isRequired>
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ width: "100%" }}>
                        <InputContainer label="Địa chỉ" isRequired>
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <InputContainer label="Giới tính" isRequired>
                            <RHFSelectWithoutIcon name="username" placeholder="Enter your username or email." data={selectData} defaultValue={0} />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <InputContainer label="Mã số sinh viên" >
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <InputContainer label="Ngày sinh" isRequired>
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <InputContainer label="Khoa" >
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <InputContainer label="Email" isRequired>
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <InputContainer label="CCCD/CMND" >
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <InputContainer label="Số điện thoại" isRequired>
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>

                </Grid>

                <Stack direction="column" spacing="16px" alignItems="flex-end" mt="36px">
                    {/* <LoadingButtonAnimation isSubmitting={isSubmitting} /> */}
                    <StyledButton label='Cập nhật' width={170} bg='#4E49D6' type='submit' />
                </Stack>
            </FormProvider>
        </ThemeProvider>

    );
}
