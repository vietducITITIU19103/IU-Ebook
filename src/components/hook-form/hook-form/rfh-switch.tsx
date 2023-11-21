import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useFormContext, Controller } from 'react-hook-form';
import Stack from '@mui/material/Stack';

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 41,
    height: 24,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: "#006B5B",
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 20,
        height: 20,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

type Props = SwitchProps & {
    name: string;
    children: React.ReactNode
};

export default function RFHSwitch({ name, children, ...other }: Props) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormGroup>
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <FormControlLabel
                            control={
                                <IOSSwitch
                                    sx={{ ml: 1 }}
                                    {...other}
                                    checked={field.value}
                                    onChange={field.onChange}
                                />}
                            label=""
                        />
                        {children}
                    </Stack>
                </FormGroup>
                // <TextField
                //     id="outlined-select-currency"
                //     select
                //     defaultValue=""
                //     fullWidth
                //     inputRef={field.ref}
                //     onBlur={field.onBlur}
                //     value={field.value}
                //     error={!!error}
                //     helperText={error ? error?.message : helperText}
                //     onChange={field.onChange}
                //     sx={{ ...TextFieldStyle }}
                //     {...other}
                // >
                //     <MenuItem key="-" value="-" >
                //             <Stack direction="row" alignItems="center" gap="8px">
                //                 {registerData.form_placeholder.country}
                //             </Stack>
                //         </MenuItem>    
                //     {countries.map((option: CountriesT) => (
                //         <MenuItem key={option.code} value={option.code} >
                //             <Stack direction="row" alignItems="center" gap="8px">
                //                 <FlagCdn _width="18px" country_code={option.code} />
                //                 {option.label}
                //             </Stack>
                //         </MenuItem>
                //     ))}
                // </TextField>
            )}
        />

    );
}