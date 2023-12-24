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

export default function EditName({ value, handleBack }: { value: string, handleBack: VoidFunction }) {


    const TextSchema = Yup.object().shape({
        name: Yup.string().required("Họ và tên là bắt buộc.")
    });

    const defaultValues = {
        name: value,
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
        setValue("name", "")
    }

    const onSubmit = handleSubmit(async (data) => {
        try {

        } catch (error) {
            reset();
        }
    });

    return (

        <FormProvider methods={methods} onSubmit={onSubmit}>
            <CartHeader title="Họ và tên" onClick={onSubmit} isHandleLogic isHandleBack handleBack={handleBack} />
            <Box sx={{ height: "100vh", pt: "75px", px: "12px", backgroundColor: "iub.background.body" }}>
                <RHFTextField
                    name="name"
                    placeholder="Điền họ và tên ở đây"
                    InputProps={{
                        endAdornment: <InputAdornment position="end" sx={{ position: "relative", right: "-10px" }}>
                            <IconButton sx={{ padding: '2px' }} onClick={resetValue}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    }}
                    sx={{backgroundColor: "iub.background.default"}}
                />
            </Box>
        </FormProvider>

    );
}
