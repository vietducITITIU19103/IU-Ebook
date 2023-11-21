import * as React from 'react';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { CountriesT, countries } from '@/assets/data/countries';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';
import FlagCdn from '../flag/flag-cdn';
import { ConfigRegister } from '@/sections/auth/components/_config/config-register';

type Props = TextFieldProps & {
    name: string;
    title: string;
    isRequired: boolean
};

const TextFieldStyle = {
    "& .MuiSelect-select": {
        paddingTop: "7.5px",
        paddingBottom: "7.5px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "8px",
    },
    "& .MuiOutlinedInput-root": {
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

export default function RHFSelect({ name, title, isRequired, helperText, type, ...other }: Props) {
    const { control } = useFormContext();
    const registerData = ConfigRegister();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    id="outlined-select-currency"
                    select
                    defaultValue=""
                    fullWidth
                    inputRef={field.ref}
                    onBlur={field.onBlur}
                    value={field.value}
                    error={!!error}
                    helperText={error ? error?.message : helperText}
                    onChange={field.onChange}
                    sx={{ ...TextFieldStyle }}
                    {...other}
                >
                    <MenuItem key="-" value="-" >
                            <Stack direction="row" alignItems="center" gap="8px">
                                {registerData.form_placeholder.country}
                            </Stack>
                        </MenuItem>    
                    {countries.map((option: CountriesT) => (
                        <MenuItem key={option.code} value={option.code} >
                            <Stack direction="row" alignItems="center" gap="8px">
                                <FlagCdn _width="18px" country_code={option.code} />
                                {option.label}
                            </Stack>
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
}
