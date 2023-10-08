import React from "react";
import Chip, { ChipProps } from '@mui/material/Chip';

type Props = ChipProps & {
    label: string;
};

export default function Customchip({ label, ...other }: Props) {
    return (
        <Chip
            size="small"
            label={label}
            sx={{
                color: "#006B5B",
                backgroundColor: "#F3FFFA",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "150%"
            }}
            {...other}
        />

    );
}