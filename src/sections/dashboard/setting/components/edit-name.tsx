'use client';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import FormProvider from '@/components/hook-form';
import RHFTextField from '@/components/hook-form/rhf-text-field';
import EditLayout from './edit-layout';
import Box from '@mui/material/Box';


export default function EditName({ value }: { value: string }) {


    const TextSchema = Yup.object().shape({
        value: Yup.string()
    });

    const defaultValues = {
        value: value,
    };

    const methods = useForm({
        resolver: yupResolver(TextSchema),
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

        <FormProvider methods={methods} onSubmit={onSubmit}>
            {/* <EditLayout title='Họ Và Tên' handleLogic={onSubmit}> */}
                <Box sx={{ height: "100vh", pt: "75px", px: "12px" }}>
                    <RHFTextField name="value" placeholder="Điền họ và tên ở đây" />
                </Box>
            {/* </EditLayout> */}
        </FormProvider>

    );
}
