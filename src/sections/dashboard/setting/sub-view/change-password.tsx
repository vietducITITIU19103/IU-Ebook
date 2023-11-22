'use client';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import FormProvider from '@/components/hook-form';
import RHFTextField from '@/components/hook-form/rhf-text-field';
import Stack from '@mui/material/Stack';
import InputContainer from '@/sections/auth/components/input-container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import RHFSelectWithoutIcon from '@/components/hook-form/rhf-select-without-icon';
import StyledButton from '@/components/button/styled-button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@/assets/icons/password/visibility-off-icon';
import VisibilityIcon from '@/assets/icons/password/visibility-icon';
import CenterHorizontalLayout from '@/layout/component-base-layout/center-horizontal-layout';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';

const CustomGrid = ({ children }: { children: React.ReactNode }) => (
  <Grid item xs={12} sx={{ width: "100%" }} >
    {/* <CenterHorizontalLayout sx={{ width: "100%"}}> */}
    {children}
    {/* </CenterHorizontalLayout> */}

  </Grid>
)

export default function ChangePassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    username: 'admin',
    password: '1',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await login?.(data.username, data.password);
    } catch (error) {
      reset();
    }
  });

  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            xs: 0,
            xssm: 450,
            sm: 600,
            smmd: 800,
            md: 900,
            mdlg: 1100,
            lg: 1200,
            xl: 1500,
          },
        },
      })}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <CenterVerticalLayout>
          <Grid container spacing={2} mt="10px" columnSpacing="48px" rowSpacing="24px" sx={{ width: { sm: "100%", md: "400px" } }}>

            <CustomGrid>
              <InputContainer label="Mật khẩu cũ" isRequired >
                <RHFTextField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ p: 0 }}>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          sx={{ p: "5px", position: "relative", left: "5px" }}
                        >
                          {showPassword ? <VisibilityOffIcon sx={{ width: "22px", height: '22px' }} /> : <VisibilityIcon sx={{ width: "22px", height: '22px' }} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}

                />
              </InputContainer>
            </CustomGrid>
            <CustomGrid>
              <InputContainer label="Mật khẩu mới" isRequired >
                <RHFTextField name="username" placeholder="Enter your username or email." type="password" />
              </InputContainer>
            </CustomGrid>
            <CustomGrid>
              <InputContainer label="Xác nhận mật khẩu">
                <RHFTextField name="username" placeholder="Enter your username or email." type="password" />
              </InputContainer>
            </CustomGrid>
            <CustomGrid>
              <StyledButton label='Thêm vào giỏ hàng' width={170} bg='#4E49D6' type='submit' sx={{ float: "right" }} />
            </CustomGrid>
          </Grid>
        </CenterVerticalLayout>
      </FormProvider>
    </ThemeProvider>

  );
}
