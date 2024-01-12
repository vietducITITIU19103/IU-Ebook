import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@/assets/icons/header/search-icon';
import { useResponsive } from '@/hooks/use-responsive';
import { InputAdornment, TextField } from '@mui/material';

const TextFieldStyle = {
    "& .MuiInputBase-input": {
        paddingTop: "8.5px",
        paddingBottom: "8.5px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "8px",
    },
    "& .MuiOutlinedInput-root": {
        paddingTop: 0,
        paddingBottom: 0,
        "& fieldset": {
            borderColor: "#9DA4AE",
            borderWidth: "1px",
        },
        "&:hover fieldset": {
            borderColor: "#9DA4AE",
            borderWidth: "1px",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#4E49D6",
            borderWidth: "1px",
            boxShadow: "0 0 2px 2px #4e49d65e"
        },
    },
};

export default function SearchBar({ value, changeValue }: { value: string, changeValue: React.Dispatch<React.SetStateAction<string>> }) {
    const down1260px = useResponsive("down", 1260);
    const down900px = useResponsive("down", 900);
    return (
        <FormControl sx={{
            width: "615px",
            ...(down1260px && { width: "35%" }),
            ...(down900px && { width: "100%" })
        }}>
            <TextField
                fullWidth
                id="outlined-adornment-amount"
                value={value}
                onChange={(e) => { changeValue(e.target.value) }}
                placeholder='Nhập từ khóa'
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon sx={{ width: "20px", height: "19px", ml: "7px", position: "relative", left: "-7px" }} /></InputAdornment>,
                }}
                sx={{ height: "40px", borderRadius: "8px", border: "none", color: "inherit", fontFamily: "inherit", ...TextFieldStyle }}
            />
        </FormControl >
    )
}
