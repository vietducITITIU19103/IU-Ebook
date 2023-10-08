import React from "react";
import Button, { ButtonProps } from '@mui/material/Button';


type Props = ButtonProps & {
    children: React.ReactNode;
    width?: string;
    height?: string;
};

export default function ButtonOutlined({ children, type, width, height, ...other }: Props) {
    return (
        <Button
            variant="outlined"
            type={type}
            sx={{
                height: "40px",
                color: "#344054",
                textTransform: "capitalize",
                fontSize: "16px",
                mb: "16px",
                border: "1px solid #D0D5DD",
                "&:hover": {
                    borderColor: "#006B5B",
                    backgroundColor: "rgba(0, 56, 47, 0.05)"
                },
                ...(width && { width: width }),
                ...(height && { height: height }),
            }}
            {...other}>
            {children}
        </Button>
    );
}
