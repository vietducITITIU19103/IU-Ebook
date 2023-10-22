import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

const RootLayer = styled(Box)<BoxProps>(({theme})=>({
    width: "100%",
    height: "420px",
    position: "relative",
    display: "flex",
    alignSelf: 'center',
    [theme.breakpoints.only("xs")]: {
        height: "260px",
    },
    [theme.breakpoints.only("sm")]: {
        height: "360px",
    },
})
    
)

const GradientLayer = styled(Box)<BoxProps>(
    {
        width: "100%",
        height: "65%",
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%)",
        position: "absolute",
        zIndex: 1,
        bottom: 0
    }
)

const ContentLayer = styled(Box)<BoxProps>(
    {
        width: "100%",
        height: "auto",
        background: "rgba(255, 255, 255, 0.30)",
        backdropFilter: "blur(12px)",
        position: "absolute",
        borderTop: "1px solid rgba(255, 255, 255, 0.50)",
        zIndex: 2,
        bottom: 0,
        padding: "24px",
        transition: "all 2s ease"
    }
)

const ControlButton = styled(IconButton)<IconButtonProps>(
    {
        width: '56px',
        height: '56px',
        border: '1px solid rgba(234, 236, 240, 1)'
    }
)

export { RootLayer, GradientLayer, ContentLayer, ControlButton }