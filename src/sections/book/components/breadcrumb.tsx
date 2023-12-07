"use client"
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import BreadcrumIcon from '@/assets/icons/arrow/breadcrum-icon';
import { MainLayout } from '@/sections/search/components/custom-component';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Home page
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Hạng mục 1
    </Link>,
    <Typography key="3" color="text.primary">
      Kế toán tài chính
    </Typography>,
  ];

  return (
    <MainLayout sx={{ backgroundColor: "transparent", pt: "23px", py: "16px", display: { xs: "none", md: "block" }, marginBottom: "0" }}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<BreadcrumIcon sx={{ width: "9px", height: '16px' }} />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </MainLayout>
  );
}