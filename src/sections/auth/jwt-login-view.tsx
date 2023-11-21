'use client';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '@/auth/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { PATH_AFTER_LOGIN } from '@/config-global';
import FormProvider from '@/components/hook-form';
import RHFTextField from '@/components/hook-form/rhf-text-field';
import Stack from '@mui/material/Stack';
import InputContainer from './components/input-container';
import CustomCheckbox from './components/custom-checkbox';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Image from 'next/image';
import IUHLogo from '@/assets/images/Logo-Ebook.png';
import TextHidden from '@/components/text-hidden';
import TextLink from './components/text-link';
import { typography } from '@/theme/typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@/assets/icons/password/visibility-icon';
import VisibilityOffIcon from '@/assets/icons/password/visibility-off-icon';
import LoadingButtonAnimation from '@/components/button/loading-button-animation';
import LoginBanner from './components/login-banner';
import { FormBox } from './components/custom-component';


export default function JwtLoginView() {
  const { login } = useAuthContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [errorMsg, setErrorMsg] = useState('');
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
      if (data.username === "admin" && data.password === "1") {
        router.push(returnTo || PATH_AFTER_LOGIN);
      }
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  return (
    <Container sx={{ height: '100vh', display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, pt: { xs: '36px', sm: 0 } }}>
      <Grid container>
        <Grid item xs={6} position="relative" top="100px" sx={{ display: { xs: "none", md: 'grid' } }}>
          <LoginBanner />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: { xs: 'flex-start', sm: 'center' }, alignItems: { xs: 'center', md: 'flex-end', lg: 'center' } }}>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <TextHidden>IUH Ebook</TextHidden>
              <Image src={IUHLogo} alt="Register logo" width={173} height={48}></Image>
            </Stack>
            <Typography
              component="h1"
              sx={{
                color: '#0D006A',
                marginTop: '20px',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 600,
                textAlign: 'center',
                lineHeight: '35.84px',
                marginBottom: '24px',
                fontFamily: typography.fontFamily,
              }}
            >
              Chào mừng bạn <br /> Trở lại với IU EBOOKS
            </Typography>
            <FormBox>
              <Stack direction="column" spacing="24px">
                <InputContainer label="Tên đăng nhập" isRequired>
                  <RHFTextField name="username" placeholder="Enter your username or email." />
                </InputContainer>
                <InputContainer label="Mật khẩu" isRequired>
                  <RHFTextField name="password" type={showPassword ? 'text' : 'password'}
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
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  paddingTop: '19px',
                  paddingBottom: '19px',
                }}
              >
                <CustomCheckbox name="IsRemember" label="Ghi nhớ mật khẩu đăng nhập" />
                <TextLink label="Quên mật khẩu" href="/forgot-password" />
              </Stack>
              <Stack direction="column" spacing="16px" alignItems="center">
                <LoadingButtonAnimation isSubmitting={isSubmitting} />
              </Stack>
            </FormBox>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
