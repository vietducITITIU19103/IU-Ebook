
import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------
type Props = BoxProps & {
    isActive?: boolean
}


function DocumentIcon({ isActive, sx, ...other }: Props) {
    return (
        <>
            {
                isActive ?
                    <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 21 26" fill="none" {...other} sx={{ width: "22px", height: "26px", ...sx }}>
                        <path opacity="0.4" d="M10.2819 21.0808L2.16728 25.1341C1.55448 25.4667 0.790072 25.2446 0.447324 24.6344C0.347224 24.4425 0.294291 24.2292 0.292969 24.0125V14.9399C0.292969 15.8394 0.800135 16.3947 2.1342 17.0165L10.2819 21.0808Z" fill="#4E49D6" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.41204 0.303711H14.1298C17.5146 0.303711 20.2599 1.63628 20.293 5.04542V24.0123C20.2916 24.2255 20.2386 24.4351 20.1386 24.623C19.9779 24.9295 19.7004 25.1571 19.3698 25.2534C19.0392 25.3497 18.684 25.3066 18.3856 25.1338L10.2819 21.0806L2.1342 17.0163C0.800135 16.3944 0.292969 15.8392 0.292969 14.9397V5.04542C0.292969 1.63628 3.03828 0.303711 6.41204 0.303711ZM5.57412 9.83155H14.9787C15.5207 9.83155 15.96 9.38906 15.96 8.84323C15.96 8.2974 15.5207 7.85491 14.9787 7.85491H5.57412C5.03218 7.85491 4.59286 8.2974 4.59286 8.84323C4.59286 9.38906 5.03218 9.83155 5.57412 9.83155Z" fill="#4E49D6" />
                    </Box>
                    :
                    <Box component="svg" xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none" {...other} sx={{ width: "22px", height: "26px", ...sx }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.6736 5.69204C20.6736 2.25345 18.3227 0.875 14.938 0.875H6.98935C3.70865 0.875 1.25 2.15946 1.25 5.46272V23.8675C1.25 24.7747 2.22619 25.3462 3.01692 24.9026L10.9944 20.4276L18.9029 24.895C19.6949 25.3412 20.6736 24.7697 20.6736 23.8612V5.69204Z" stroke="#6C737F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.33887 9.28526H15.4867" stroke="#6C737F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </Box>
            }
        </>

    );
}

export default memo(DocumentIcon);