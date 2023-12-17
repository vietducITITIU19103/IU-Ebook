import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';

type Props = TextFieldProps & {
    name: string;
    title: string;
    isRequired: boolean
};

const TextFieldStyle = {
    '& .MuiInputBase-input': {
      paddingTop: '8px',
      paddingBottom: '8px',
      height: '29px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '6px',
    },
    '& .MuiOutlinedInput-root': {
      paddingTop: 0,
      paddingBottom: 0,
      '& fieldset': {
        borderColor: '#D0D5DD',
      },
      '&:hover fieldset': {
        borderColor: '#006B5B',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#006B5B',
        boxShadow: "0 0 2px 2px rgba(0, 107, 91, 0.3)"
      },
    },
  };
  
const top100Films = [
    { id: "1", label: '6109.10' },
    { id: "2", label: '6109.20' },
    { id: "3", label: '6109.30' },
    { id: "4", label: '6109.40' },
    { id: "5", label: '6109.50' },
    { id: "6", label: '6109.60' },
    { id: "7", label: '6109.70' },
    { id: "8", label: '6109.80' },
    { id: "9", label: '6109.90' },
];

export default function RHFAutoComplete({ name, title, isRequired, helperText, type, ...other }: Props) {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name="hsCode"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Autocomplete
                    multiple
                    onChange={(event, item) => {
                        onChange(item);
                    }}
                    value={value}
                    options={top100Films}
                    getOptionLabel={(item) => (item.label ? item.label : "")}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    // getOptionSelected={(option:any, value:any) =>
                    //   value === undefined || value === "" || option.id === value.id
                    // }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            margin="normal"
                            variant="outlined"
                            error={!!error}
                            helperText={error && "item required"}
                            sx={{ ...TextFieldStyle }}
                            placeholder="Choose your HS Code"
                        />
                    )}
                  
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                variant="outlined"
                                label={option.label}
                                size="small"
                                {...getTagProps({index})}
                                key={option.label}
                                sx={{
                                    borderRadius: "6px",
                                    borderColor: "iub.auth.line",
                                    paddingTop: "2px"
                                }}
                            />
                        ))
                    }
                />
            )}
        />

    );
}


