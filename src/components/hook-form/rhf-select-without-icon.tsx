import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';
import { ThemeContext } from '@/theme';
import { useContext } from 'react';

type Props = TextFieldProps & {
    name: string;
    data: { value: number, label: string }[]
};

const TextFieldStyle = {
    "input": {
        "&::placeholder": {
          color: "iub.text.placeholder"
        },
        color: "white", // if you also want to change the color of the input, this is the prop you'd use
      },
    "& .MuiInputBase-input": {
        paddingTop: "6.5px",
      paddingBottom: "6.5px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "8px",
    },
    "& .MuiOutlinedInput-root": {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "iub.background.default",
        "& fieldset": {
            borderColor: "#9DA4AE",
            borderWidth: "1px",
        },
        "&:hover fieldset": {
            borderColor: "#4E49D6",
            borderWidth: "1px",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#4E49D6",
            borderWidth: "1px",
            boxShadow: "0 0 2px 2px #4e49d65e"
        },
    },
};



export default function RHFSelectWithoutIcon({ data, name, helperText, type, defaultValue, ...other }: Props) {
    const { control } = useFormContext();
    const {palette: {iub: {text}}} = useContext(ThemeContext);

    
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
                            <span style={{...(index === 0 && {color: text.placeholder})}}>{option.label}</span>
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
}
