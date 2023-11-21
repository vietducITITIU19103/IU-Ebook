
import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import AutoComplete from './autocomplete';
import RHFTextField from './rhf-text-field';

type Props = TextFieldProps & {
    selectName: string;
    textfieldName: string;
};

const TextFieldStyle = {
    "& .MuiInputBase-input": {
        paddingTop: "10.5px",
        paddingBottom: "10.5px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "8px",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px"
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

const SelectStyle = {
    "& .MuiInputBase-input": {
        paddingTop: "8px",
        paddingBottom: "8px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "6px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        borderRight: "none"
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
        },
    },
};


export default function RhfTextfieldWithSelect({ selectName, textfieldName, ...other }: Props) {

    return (
        <Stack direction="row">
            <AutoComplete name={selectName} />
            <RHFTextField
                name={textfieldName}
                sx={TextFieldStyle}
                {...other}
            ></RHFTextField>
        </Stack>
    )
}
