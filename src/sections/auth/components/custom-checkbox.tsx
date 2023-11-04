"use client"
import React from 'react'
import { styled } from '@mui/material/styles';
import { useFormContext, Controller } from 'react-hook-form';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgb(0, 107, 91, 0.05)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

export const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#4E49D6",
    position: "relative",
    top: "1px",
    padding: 0,
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fillRule='evenodd' clipRule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#006B5B',
    },
});

export default function CustomCheckbox({name, label}:{name: string , label: string}) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                "&:hover": { bgcolor: "transparent" },
                            }}
                            disableRipple
                            color="default"
                            checkedIcon={<BpCheckedIcon />}
                            icon={<BpIcon />}
                            inputProps={{ "aria-label": "Checkbox demo" }}
                            checked={field.value}
                            onChange={field.onChange}
                            inputRef={field.ref}
                        />
                    }
                    label={label}
                    sx={{
                        lineHeight: 1,
                        position: "relative",
                        left: "2px",
                        "& .MuiTypographyRoot": {
                            fontSize: "16px",
                            fontWeight: 500
                        }
                    }}
                />
            )}
        />
    )
}

