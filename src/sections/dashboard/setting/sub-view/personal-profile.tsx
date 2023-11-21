'use client';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import FormProvider from '@/components/hook-form';
import RHFTextField from '@/components/hook-form/rhf-text-field';
import Stack from '@mui/material/Stack';
import LoadingButtonAnimation from '@/components/button/loading-button-animation';
import InputContainer from '@/sections/auth/components/input-container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

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
            {/* <Grid container spacing={2} mt="10px">
          {
            data.map((item: PromotionTypes, index: number) => (
              <Grid item xs={12} smmd={6} md={12} mdlg={6} key={item.id} >
                <PromotionCard {...item}/>
              </Grid>
            ))
          }
        </Grid> */}
            <FormProvider methods={methods} onSubmit={onSubmit}>
                <Grid container spacing={2} mt="10px" columnSpacing="48px" rowSpacing="24px">
                    <Grid item xs={12} md={6} sx={{width:"100%"}}>
                        <InputContainer label="Họ và tên" isRequired>
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{width:"100%"}}>
                        <InputContainer label="Địa chỉ" isRequired>
                            <RHFTextField name="username" placeholder="Enter your username or email." />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={12} md={6} >

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

                <Stack direction="column" spacing="16px" alignItems="flex-end" >
                    <LoadingButtonAnimation isSubmitting={isSubmitting} />
                </Stack>
            </FormProvider>
        </ThemeProvider>

    );
}
