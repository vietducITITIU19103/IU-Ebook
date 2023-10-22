import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@/assets/icons/header/search-icon';
import { useResponsive } from '@/hooks/use-responsive';

export default function SearchBar() {
    const down1260px = useResponsive("down",1260);
    const down900px = useResponsive("down",900);
    return (
        <FormControl sx={{
            width: "615px",
            ...(down1260px&&{width: "35%"}),
            ...(down900px&&{width: "100%"})
        }}>
            <OutlinedInput
                fullWidth
                id="outlined-adornment-amount"
                startAdornment={<SearchIcon sx={{ width: "20px", height: "19px" }} />}
                sx={{ height: "40px", borderRadius: "8px", border: "none", color: "inherit", fontFamily: "inherit" }}
            />
        </FormControl >
    )
}
