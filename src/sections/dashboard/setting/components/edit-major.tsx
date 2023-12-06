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

export default function EditMajor({ value, handleBack }: { value: string, handleBack: VoidFunction }) {


    const TextSchema = Yup.object().shape({
        major: Yup.string().required("Tên khoa là bắt buộc.")
    });

    const defaultValues = {
        major: value,
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
        setValue("major","")
    }

    const onSubmit = handleSubmit(async (data) => {
        try {

        } catch (error) {
            reset();
        }
    });

    return (

        <FormProvider methods={methods} onSubmit={onSubmit}>
            <CartHeader title="Khoa" onClick={onSubmit} isHandleLogic isHandleBack handleBack={handleBack} />
            <Box sx={{ height: "100vh", pt: "75px", px: "12px" }}>
                <RHFTextField
                    name="major"
                    placeholder="Điền tên khoa ở đây"
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
