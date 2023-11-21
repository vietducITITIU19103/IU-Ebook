import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';
import RHFTextField from './rhf-text-field';

type Props = TextFieldProps & {
    textPattern: string;
    name: string;
};

const TextFieldStyle = {
    "& .MuiInputBase-input": {
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "8px",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    "& .MuiOutlinedInput-root": {
        paddingTop: 0,
        paddingBottom: 0,
        "& fieldset": {
            borderColor: "#D0D5DD",
        },
        "&:hover fieldset": {
            borderColor: "#006B5B",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#006B5B",
            boxShadow: "0 0 2px 2px rgba(0, 107, 91, 0.3)"
        },
    },
};

export default function PreTabTextField({ textPattern, name , ...other }: Props) {
    const { control } = useFormContext();
    return (
        <Stack
            direction="row"
            width="100%"
            alignItems="stretch"
            // sx={{height: "44px", backgroundColor: "red"}}
        >
            <Box sx={{
                borderColor: "#D0D5DD",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "6px",
                borderRight: "none",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: "12px",
                height: "43px"
            }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        lineHeight: 1,
                        fontSize: "16px", 
                        fontWeight: 400
                    }}
                >
                    {textPattern}
                </Typography>
            </Box>
            <RHFTextField name={name} sx={{...TextFieldStyle}} {...other}/>
        </Stack>
    )
}
