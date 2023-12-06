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

export default function EditPhone({ value, handleBack }: { value: string, handleBack: VoidFunction }) {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const PhoneSchema = Yup.object().shape({
        phone: Yup.string().matches(phoneRegExp, "Số điện thoại không hợp lệ").required("Vui lòng nhập số điện thoại"),
    });

    const defaultValues = {
        phone: value,
    };

    const methods = useForm({
        resolver: yupResolver(PhoneSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = methods;

    const resetValue = () => {
        setValue("phone","")
    }

    const onSubmit = handleSubmit(async (data) => {
        try {

        } catch (error) {
            reset();
        }
    });

    return (

        <FormProvider methods={methods} onSubmit={onSubmit}>
            <CartHeader title="Số điện thoại" onClick={onSubmit} isHandleLogic isHandleBack handleBack={handleBack} />
            <Box sx={{ height: "100vh", pt: "75px", px: "12px" }}>
                <RHFTextField
                    name="phone"
                    placeholder="Điền số điện thoại ở đây"
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
