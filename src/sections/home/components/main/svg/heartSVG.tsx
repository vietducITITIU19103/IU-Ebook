"use client"
import Box, { BoxProps } from '@mui/material/Box'
import React, { memo, useEffect, useCallback, useState } from 'react'

type Props = BoxProps & {
    active:boolean,
    toggleState: ()=>void
}

function HeartSVG({active, toggleState, sx, ...other }: Props) {
    // const [active, setActive] = useState<boolean>(state? state : false)
    // const toggleState = useCallback(() => {
    //     setActive(!active)
    // }, [active])
    return (
        <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="26"
            viewBox="0 0 28 26"
            fill="none"
            {...other}
            onClick={() => toggleState()}
            sx={{
                cursor: "pointer",
                width: "28px",
                height: "26px",
                "&:hover>path": {
                    fill: "#F3633E"
                },
                ...sx
            }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.00827 12.7144C0.577605 8.24776 2.2496 3.14243 6.93894 1.63176C9.4056 0.835764 12.1283 1.76159 14.1789 3.30426C16.1189 1.80426 18.9416 0.841097 21.4056 1.63176C26.0949 3.14243 27.7776 8.24776 26.3483 12.7144C24.1216 19.7944 14.1789 25.2478 14.1789 25.2478C14.1789 25.2478 4.3096 19.8771 2.00827 12.7144Z" fill={active ? "#F3633E" : "white"} stroke={active ? "#F3633E" : "#352CBE"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Box>
    )
}

export default memo(HeartSVG)
