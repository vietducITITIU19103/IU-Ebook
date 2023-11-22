import React from 'react'
import Typography from '@mui/material/Typography';
import Stack,{StackProps} from '@mui/material/Stack';


type InputContainerProps = StackProps & {
    label: string,
    isRequired?:boolean,
    children: React.ReactNode
}

export default function InputContainer({label, isRequired, children,  ...other}: InputContainerProps) {
  return (
    <Stack direction="column" spacing="6px" {...other}>
      <Typography
                variant="subtitle1"
                sx={{
                    color: "#344054",
                    fontWeight: 700,
                    fontFamily: "inherit",
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
