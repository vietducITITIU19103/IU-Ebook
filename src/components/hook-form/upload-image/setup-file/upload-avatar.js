import { isString } from "lodash";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
// material
import { alpha, styled } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import CameraIcon from "@/assets/icons/upload/camera-icon";
// utils
import { fData } from "./formatNumber";
import Image from "next/image";
import FormHelperText from '@mui/material/FormHelperText';
import CenterVerticalLayout from "@/layout/component-base-layout/center-vertical-layout";

// ----------------------------------------------------------------------

const DropZoneStyle = styled("div")(({ theme }) => ({
    width: "152px",
    height: "40px",
    border: "1px solid #D0D5DD",
    borderRadius: "8px",
    display: "flex",
    overflow: "hidden",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
        border: "1px solid rgba(0, 107, 91, 1)",
    }
}));

// ----------------------------------------------------------------------

UploadAvatarFile.propTypes = {
    error: PropTypes.bool,
    file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onRemove: PropTypes.func,
    isUseButton: PropTypes.bool,
    isMobile: PropTypes.bool,
};

export default function UploadAvatarFile({ isMobile, file, error, onRemove, isUseButton, ...other }) {
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

    console.log("file".file)
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
            <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                spacing="15px"
                sx={{
                    paddingTop: { xs: "50px", md: "20px" },
                    ...(isMobile && {
                        position: "absolute",
                        top: {xs: "35%", xssm: "42% ",sm: "55%", smmd: "70%"}
                    })
                }}
            >
                {isUseButton && <DropZoneStyle
                    {...getRootProps()}
                    sx={{
                        ...(isDragActive && { opacity: 0.72 }),
                        ...((isDragReject || error) && {
                            color: "error.main",
                            borderColor: "error.light",
                            bgcolor: "error.lighter",
                        }),
                    }}
                >
                    <input {...getInputProps()} />
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing="8px"
                    >
                        <CameraIcon />
                        <Typography
                            sx={{
                                color: "#475467",
                                fontSize: "14px",
                                lineHeight: "20px",
                                fontWeight: '600'
                            }}
                        >
                            Upload photo
                        </Typography>
                    </Stack>

                </DropZoneStyle>}
                {fileRejections.length > 0 && <ShowRejectionItems />}
                <Box sx={{ padding: "8px", border: "2px dashed lightgray", borderRadius: "50%", }}>
                    <Box
                        {...getRootProps()}
                        sx={{
                            cursor: "pointer",
                            backgroundColor: "rgba(31, 42, 55, 0.3)",
                            width: "128px",
                            height: "128px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden",

                        }}>
                        <CenterVerticalLayout sx={{
                            position: "relative",
                            zIndex: 2,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(31, 42, 55, 0.3)",
                            "&:hover": {
                                backgroundColor: "rgba(31, 42, 55, 0.45)"
                            }
                        }}>
                            <CameraIcon />
                            <Typography sx={{ color: "white" }}>Tải ảnh lên</Typography>
                        </CenterVerticalLayout>
                        {(file !== undefined && file !== "") && (
                            <>
                                <Box
                                    component="img"
                                    alt="file preview"
                                    src={typeof file === "string" ? file : URL.createObjectURL(file[0])}
                                    sx={{
                                        borderRadius: 1,
                                        objectFit: "cover",
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "50%",
                                        transition: "all 0.3s ease",
                                        zIndex: "0"
                                    }}
                                />
                            </>
                        )}
                    </Box>

                </Box>
                <Typography sx={{ maxWidth: { xs: "300px", lg: "150px" }, fontSize: "14px", textAlign: "center", color: "iub.text.light", letterSpacing: "0" }}>Sử dụng các định dạng *.jpeg, *.jpg, *.png, *.gif Max size of 3.1 MB</Typography>
            </Stack>
            {error && <FormHelperText sx={{ color: "red" }}>{error}</FormHelperText>}
        </>

    );
}