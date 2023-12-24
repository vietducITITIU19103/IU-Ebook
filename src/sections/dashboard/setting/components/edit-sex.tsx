'use client';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import FormProvider from '@/components/hook-form';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import CustomRadio from '@/components/hook-form/custom-radio';
import Stack from '@mui/material/Stack';
import CartHeader from '@/components/header/cart-header';


export default function EditSex({ value, handleBack }: { value: 0 | 1 | 2, handleBack: VoidFunction }) {

    const sexList = ["male", "female", "other"]

    const TextSchema = Yup.object().shape({
        male: Yup.string(),
        female: Yup.string(),
        other: Yup.string(),
    });

    const defaultValues = {
        male: "male",
        female: "female",
        other: "other"
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
            alert("sguhrsug")
        } catch (error) {
            reset();
        }
    });

    return (

        <FormProvider methods={methods} onSubmit={onSubmit}>
            <CartHeader title="Giới tính" onClick={onSubmit} isHandleLogic isHandleBack handleBack={handleBack} />
            <Box sx={{ height: "100vh", pt: "75px", px: "12px", backgroundColor: "iub.background.body"  }}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={sexList[value]}
                    name="radio-buttons-group"
                >
                    <Stack direction="row" justifyContent="space-between">
                        <CustomRadio name="male" label='Male' />
                        <CustomRadio name="female" label='Female' />
                        <CustomRadio name="other" label='Other' />
                    </Stack>
                </RadioGroup>
            </Box>
        </FormProvider>

    );
}
