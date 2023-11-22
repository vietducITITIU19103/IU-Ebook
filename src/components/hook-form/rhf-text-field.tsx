import { useFormContext, Controller } from 'react-hook-form';
// @mui
import TextField, { TextFieldProps } from '@mui/material/TextField';

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
};

const TextFieldStyle = {
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

export default function RHFTextField({ name, helperText, type, sx, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={type === 'number' && field.value === 0 ? '' : field.value}
          onChange={(event) => {
            if (type === 'number') {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
          sx={{...TextFieldStyle, ...sx}}
        />
      )}
    />
  );
}
