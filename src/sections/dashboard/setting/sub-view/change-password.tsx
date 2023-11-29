'use client';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import FormProvider from '@/components/hook-form';
import RHFTextField from '@/components/hook-form/rhf-text-field';
import InputContainer from '@/sections/auth/components/input-container';
import Grid, { GridProps } from '@mui/material/Grid';
import StyledButton from '@/components/button/styled-button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@/assets/icons/password/visibility-off-icon';
import VisibilityIcon from '@/assets/icons/password/visibility-icon';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import CommonGridLayout from '../_common/common-grid-layout';
import CartHeader from '@/components/header/cart-header';

const CustomGrid = ({ children, sx, ...other }: GridProps & { children: React.ReactNode }) => (
  <Grid item xs={12} sx={{ width: "100%", ...sx }} {...other}>
    {children}
  </Grid>
)

export default function ChangePassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const ChangePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Mật khẩu hiện tại là bắt buộc.'),
    newPassword: Yup.string().required('Mật khẩu mới là bắt buộc'),
    repeatePassword: Yup.string().required('Vui lòng nhập lại mật khẩu'),
  });

  const defaultValues = {
    currentPassword: "",
    newPassword: "",
    repeatePassword: "",
  };


  const methods = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    getValues,
    setError,
    formState: { isSubmitting, errors },
  } = methods;


  const onSubmit = handleSubmit(async (data) => {
    try {
      if (getValues("newPassword") === getValues("currentPassword")) {
        setError("newPassword", { type: "setValueAs", message: "Mật khẩu mới không được trùng khớp với mật khẩu hiện tại!" })
      } else {
        if (getValues("newPassword") === getValues("repeatePassword")) {
          console.log("data-changepss", data)
        } else {
          setError("repeatePassword", { type: "setValueAs", message: "Nhập lại mật khẩu cần trùng khớp với mật khẩu mới!" })
        }
      }

    } catch (error) {
      reset();
    }
  });

  return (
    <CommonGridLayout>
      <CartHeader title="Thay đổi mật khẩu" isHandleLogic onClick={onSubmit} />
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <CenterVerticalLayout sx={{padding: "16px", height: {xs: "calc( 100vh )", md: "auto"}}}>
          <Grid container spacing={2} mt="10px" columnSpacing="48px" rowSpacing="24px" sx={{ width: { sm: "100%", md: "400px" } }}>
            <CustomGrid>
              <InputContainer label="Mật khẩu cũ" isRequired >
                <RHFTextField
                  name="currentPassword"
                  placeholder='Điền mật khẩu hiện tại ở đây'
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
                <RHFTextField name="newPassword" placeholder="Điền mật khẩu mới ở đây" type="password" />
              </InputContainer>
            </CustomGrid>
            <CustomGrid>
              <InputContainer label="Xác nhận mật khẩu">
                <RHFTextField name="repeatePassword" placeholder="Nhập lại mật khẩu ở đây" type="password" />
              </InputContainer>
            </CustomGrid>
            <CustomGrid sx={{ position: "relative", right: "4px", display: {xs:"none", md: "flex"} }}>
              <StyledButton label='Cập nhật' width={170} bg='#4E49D6' sx={{ float: "right" }} onClick={onSubmit} />
            </CustomGrid>
          </Grid>
        </CenterVerticalLayout>
      </FormProvider>
    </CommonGridLayout>

  );
}
