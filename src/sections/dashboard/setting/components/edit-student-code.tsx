'use client';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import FormProvider from '@/components/hook-form';
import RHFTextField from '@/components/hook-form/rhf-text-field';
import Box from '@mui/material/Box';
import CartHeader from '@/components/header/cart-header';
import CloseIcon from '@/assets/icons/button/close-icon';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export default function EditStudentCode({ value, handleBack }: { value: string, handleBack: VoidFunction }) {


    const TextSchema = Yup.object().shape({
        studenCode: Yup.string().required("Mã số sinh viên là bắt buộc.")
    });

    const defaultValues = {
        studenCode: value,
    };

    const methods = useForm({
        resolver: yupResolver(TextSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = methods;

    const resetValue = () => {
        setValue("studenCode","")
    }

    const onSubmit = handleSubmit(async (data) => {
        try {

        } catch (error) {
            reset();
        }
    });

    return (

        <FormProvider methods={methods} onSubmit={onSubmit}>
            <CartHeader title="Mã số sinh viên" onClick={onSubmit} isHandleLogic isHandleBack handleBack={handleBack} />
            <Box sx={{ height: "100vh", pt: "75px", px: "12px" }}>
                <RHFTextField
                    name="studenCode"
                    placeholder="Điền mã số sinh viên ở đây"
                    InputProps={{
                        endAdornment: <InputAdornment position="end" sx={{position: "relative", right: "-10px"}}>
                            <IconButton sx={{padding: '2px'}} onClick={resetValue}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </Box>
        </FormProvider>

    );
}