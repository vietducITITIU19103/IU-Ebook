import React from "react";
import Button, { ButtonProps } from '@mui/material/Button';

type Props = ButtonProps & {
  label: string;
};

export default function ButtonContained({ label, type, ...other}: Props) {
  return (
    <Button
      variant="contained"
      type={type}
      fullWidth 
      sx={{
        height: "40px",
        backgroundColor: "#006B5B",
        textTransform: "initial",
        fontSize: "16px",
        mb: "16px",
        '&: hover': {
          backgroundColor: '#00382F',
        },
      }}
      {...other}>
      {label}
    </Button>
  );
}
