'use client';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import FormProvider from '@/components/hook-form';
import InputContainer from '@/sections/auth/components/input-container';
import Grid, { GridProps } from '@mui/material/Grid';
import StyledButton from '@/components/button/styled-button';
import CenterVerticalLayout from '@/layout/component-base-layout/center-vertical-layout';
import CommonGridLayout from '../_common/common-grid-layout';
import RFHSwitch from '@/components/hook-form/rfh-switch';
import CartHeader from '@/components/header/cart-header';
import { useContext } from 'react';
import { ThemeContext } from '@/theme';

const CustomGrid = ({ children, sx, ...other }: GridProps & { children: React.ReactNode }) => (
  <Grid item xs={12} sx={{ width: "100%", ...sx }} {...other}>
    {children}
  </Grid>
)

export default function SystemSetting() {
  const { palette: { iub: { background } } } = useContext(ThemeContext)
  const SystemSettingSchema = Yup.object().shape({
    noteNofi: Yup.boolean().optional(),
    ebookNofi: Yup.boolean().optional(),
    newDocNofi: Yup.boolean().optional(),
    interactNofi: Yup.boolean().optional()
  });

  const defaultValues = {
    noteNofi: true,
    ebookNofi: false,
    newDocNofi: false,
    interactNofi: false
  };


  const methods = useForm({
    resolver: yupResolver(SystemSettingSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;


  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log("setting", data)
    } catch (error) {
      reset();
    }
  });

  return (
    <CommonGridLayout>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <CartHeader title="Cài đặt hệ thống" isHandleLogic onClick={onSubmit} />
        <CenterVerticalLayout sx={{ padding: "16px", height: { xs: "calc( 100vh)", md: "auto", paddingTop: "70px", backgroundColor: { xs: background.body, md: background.default } } }}>
          <Grid container spacing={2} mt="10px" columnSpacing="48px" rowSpacing="24px" sx={{ width: { sm: "100%", md: "468px" } }}>
            <CustomGrid>
              <InputContainer label="Hoạt động" spacing="15px" sx={{ mt: "-34px" }}>
                <RFHSwitch name="noteNofi">Nhận tương tác chia sẻ ghi chú từ người khác</RFHSwitch>
              </InputContainer>
            </CustomGrid>
            <CustomGrid>
              <InputContainer label="Thông báo" mb="10px" spacing="15px">
                <RFHSwitch name="newDocNofi" >Nhận thông báo cập nhật tài liệu mới</RFHSwitch>
                <RFHSwitch name="ebookNofi" >Nhận thông báo quan trọng từ hệ thống E-book</RFHSwitch>
                <RFHSwitch name="interactNofi">Nhận thông báo khi có tương tác từ người khác</RFHSwitch>
              </InputContainer>
            </CustomGrid>
            <CustomGrid sx={{ position: "relative", right: "4px", display: { xs: "none", md: "flex" } }}>
              <StyledButton label='Cập nhật' width={110} bg='#4E49D6' sx={{ float: "right", width: "auto" }} onClick={onSubmit} />
            </CustomGrid>
          </Grid>
        </CenterVerticalLayout>
      </FormProvider>
    </CommonGridLayout>

  );
}
