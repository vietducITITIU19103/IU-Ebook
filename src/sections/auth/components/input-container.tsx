import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


type InputContainerProps = {
    label: string,
    isRequired?:boolean,
    children: React.ReactNode
}

export default function InputContainer({label, isRequired, children}: InputContainerProps) {
  return (
    <Stack direction="column" spacing="6px">
      <Typography
                variant="subtitle1"
                sx={{
                    color: "#344054",
                    fontWeight: 700,
                    marginBottom: "6px",
                    lineHeight: "20px",
                    fontSize: "18px"
                }}
            >
                {label} {isRequired && <span style={{color: "red"}}>*</span>}
            </Typography>
            {children}
    </Stack>
  )
}
