import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'

type Props = TextFieldProps & {
    name: string;
};

const TextFieldStyle = {
    '& .MuiInputBase-input': {
        height: '15px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '6px',
    },
    '& .MuiOutlinedInput-root': {
        paddingTop: "6.5px",
        paddingBottom: "6.5px",
        '& fieldset': {
            borderColor: '#D0D5DD',
        },
        '&:hover fieldset': {
            borderColor: '#006B5B',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#006B5B',
            boxShadow: "0 0 2px 2px rgba(0, 107, 91, 0.3)"
        },
    },
};

const filter = createFilterOptions<FilmOptionType>();

export default function RFHCreatableAutocomplete({ name, sx, ...other }: Props) {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Autocomplete
                    id="free-solo-dialog-demo"
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    multiple
                    fullWidth
                    freeSolo
                    // limitTags={15}
                    options={[]}
                    defaultValue={value}
                    onChange={(event, item) => {
                        onChange(item.slice(0,15))

                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);
                        if (value) {
                            const test = value.find((item: string) => item === params.inputValue)
                            if (params.inputValue !== '') {
                                let obj = { inputValue: params.inputValue };
                                let newObj: any = {}
                                if (!test) {
                                    newObj = {
                                        ...obj,
                                        title: `Add "${params.inputValue}"`,
                                    }
                                } else {
                                    newObj = {
                                        ...obj,
                                        title: `"${params.inputValue}" already exist, please choose another keyword!`,
                                    }
                                }
                                filtered.push(newObj);
                            }
                        }
                        return filtered;
                    }}
                    getOptionLabel={(option) => {
                        return option.inputValue;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.title}</li>}
                    renderInput={(params) => (
                        <TextField {...params}
                            error={!!error}
                            helperText={error ? error?.message : `${value ? 15 - value.length >= 0 ? 15 - value.length : 0 : 15} keywords remaining`}
                            sx={{ ...TextFieldStyle, ...sx }}
                            {...other} />)}
                    renderTags={(value, getTagProps) => (
                        value.map((option, index) => {
                            console.log("option",option)
                            return (<Chip
                                variant="outlined"
                                label={`${option}`}
                                size="small"
                                {...getTagProps({ index })}
                                disabled={index > 14}
                                key={option}
                                sx={{
                                    borderRadius: "6px",
                                    borderColor: "iub.auth.line",
                                }}
                            />)
                        }
                        ))
                    }

                />
            )}
        />
    );
}

interface FilmOptionType {
    inputValue?: string;
    title: string;
    year?: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films: readonly FilmOptionType[] = [];