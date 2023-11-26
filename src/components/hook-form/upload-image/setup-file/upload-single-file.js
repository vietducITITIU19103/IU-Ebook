import { isString } from "lodash";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
// material
import { alpha, styled } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CloseIcon from "@/assets/icons/form/close-icon";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
// utils
import { fData } from "./formatNumber";
import Image from "next/image";
import UploadIcon from "@/assets/images/upload-icon.png"
import FormHelperText from '@mui/material/FormHelperText';

// ----------------------------------------------------------------------

const DropZoneStyle = styled("div")(({ theme }) => ({
    width: "512px",
    height: "150px",
    display: "flex",
    overflow: "hidden",
    textAlign: "center",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(3, 0),
    borderRadius: "12px",
    transition: theme.transitions.create("padding"),
    backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

UploadSingleFile.propTypes = {
    error: PropTypes.bool,
    file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onRemove: PropTypes.func,
};

export default function UploadSingleFile({ file, error, onRemove, ...other }) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
    } = useDropzone({
        multiple: false,
        ...other,
        accept: {
            'image/svg': ['.svg'],
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/gif': ['.gif'],
        },
    });

    const ShowRejectionItems = () => (
        <Paper
            variant="outlined"
            sx={{
                py: 1,
                px: 2,
                mt: 3,
                borderColor: "error.light",
                bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
            }}
        >
            {fileRejections.map(({ file, errors }) => {
                const { path, size } = file;
                return (
                    <Box key={path} sx={{ my: 1 }}>
                        <Typography variant="subtitle2" noWrap>
                            {path} - {fData(size)}
                        </Typography>
                        {errors.map((e) => (
                            <Typography
                                key={e.code}
                                variant="caption"
                                component="p"
                            >
                                - {e.message}
                            </Typography>
                        ))}
                    </Box>
                );
            })}
        </Paper>
    );

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    border: "1px solid #D0D5DD",
                    borderRadius: "12px",
                    position: "relative",
                    display: "flex",
                    direction: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                        // opacity: 0.72,
                        cursor: "pointer",
                        border: `0.5px solid #006B5B`,
                    },
                    ...(error&&{border: "1px solid #ff0000"})
                }}
            >
                {file.preview && (
                    <Box
                        sx={{
                            top: 12,
                            right: 14,
                            position: "absolute",
                            zIndex: 10,
                        }}
                    >
                        <IconButton
                            size="small"
                            onClick={() => onRemove()}
                            sx={{
                                p: "2px",
                                color: "common.white",
                                bgcolor: (theme) =>
                                    alpha(theme.palette.grey[900], 0.72),
                                "&:hover": {
                                    bgcolor: (theme) =>
                                        alpha(theme.palette.grey[900], 0.48),
                                },
                            }}
                        >
                            <CloseIcon sx={{ width: "20px", height: "21px", color: "white" }} color="white"/>
                        </IconButton>
                    </Box>
                )}
                <DropZoneStyle
                    {...getRootProps()}
                    sx={{
                        ...(isDragActive && { opacity: 0.72 }),
                        ...((isDragReject || error) && {
                            color: "error.main",
                            borderColor: "error.light",
                            bgcolor: "error.lighter",
                        }),
                        ...(file && { padding: "10% 0" }),
                        // width: "100%",
                    }}
                >
                    <input {...getInputProps()} />
                    <Box
                        sx={{
                            // p: 3,
                            ml: { md: 2 },
                        }}
                    >
                        <Image
                            src={UploadIcon}
                            alt="upload-Icon"
                            width={40}
                            height={40}
                            style={{ marginBottom: "12px" }}
                        />
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#475467",
                                fontSize: "14px",
                                lineHeight: "18px",
                                marginBottom: "4px",
                            }}
                        >
                            <Typography
                                variant="body2"
                                component="span"
                                sx={{
                                    color: "#006B5B",
                                    fontWeight: "500",
                                    textDecoration: "underline",
                                }}
                            >
                                Click to upload
                            </Typography>
                            &nbsp;or drag and drop
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{
                                color: "#475467",
                                fontSize: "14px",
                                lineHeight: "18px",
                            }}
                        >
                            SVG, PNG, JPG or GIF (max. 800x800px)
                        </Typography>
                    </Box>
                    {file.preview && (
                        <Box sx={{
                            backgroundColor: "white",
                            width: "calc(100% - 16px)",
                            height: "calc(100% - 16px)",
                            position: "absolute",
                            borderRadius: 1,
                        }}>
                            <Box
                                component="img"
                                alt="file preview"
                                src={isString(file) ? file : file.preview}
                                sx={{
                                    borderRadius: 1,
                                    objectFit: "cover",
                                    // position: "absolute",
                                    width: "100%",
                                    height: "100%",

                                }}
                            />
                        </Box>
                    )}
                </DropZoneStyle>
                {fileRejections.length > 0 && <ShowRejectionItems />}
            </Box>
            {error&&<FormHelperText sx={{color: "red"}}>{error}</FormHelperText>}
            </>

    );
}