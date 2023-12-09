import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export const IconContainer = ({ children, sx, ...other }: IconButtonProps) => (
    <IconButton
        {...other}
        sx={{
            position: "absolute",
            zIndex: 5,
            backgroundColor: "rgba(17, 25, 39, 0.4)",
            transition: "all 0.2s ease",
            "&:hover": {
                backgroundColor: "rgba(17, 25, 39, 0.8)",
            },
            ...sx
        }}>
        {children}
    </IconButton>
)