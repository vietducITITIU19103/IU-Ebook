import { useFormContext, Controller } from 'react-hook-form';
// @mui
import TextField, { TextFieldProps } from '@mui/material/TextField';

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
};

const TextFieldStyle = {
  "& .MuiInputBase-input": {
      paddingTop: "10px",
      paddingBottom: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root": {
      paddingTop: 0,
      paddingBottom: 0,
      width: '100%',
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

export default function RHFTextField({ name, helperText, type, ...other }: Props) {
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
          sx={{...TextFieldStyle}}
          {...other} 
        />
      )}
    />
  );
}
