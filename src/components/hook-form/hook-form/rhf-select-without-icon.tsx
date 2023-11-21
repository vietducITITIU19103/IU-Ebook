import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from '@/locales';
// import { useIsClient } from '@/hooks/use-is-client';

type Props = TextFieldProps & {
    name: string;
    data: { value: number, label: string }[]
};

const TextFieldStyle = {
    "& .MuiInputBase-input": {
        paddingTop: "8px",
        paddingBottom: "8px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "6px",
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



export default function RHFSelectWithoutIcon({ data, name, helperText, type, defaultValue, ...other }: Props) {
    const { control } = useFormContext();
    // const { t } = useLocales();
    // const isClient = useIsClient();

    
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    inputRef={field.ref}
                    onBlur={field.onBlur}
                    value={field.value}
                    error={!!error}
                    helperText={error ? error?.message : helperText}
                    onChange={field.onChange}
                    sx={{ ...TextFieldStyle, height: "44px", marginBottom: `${error ? "15px !important" : 0}` }}
                    {...other}
                >
                    {data.map((option: {value: number, label: string }, index:number) => (
                        <MenuItem key={option.value} value={option.value} disabled={index === 0 ? true : false}>
                            <span>{option.label}</span>
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
}
