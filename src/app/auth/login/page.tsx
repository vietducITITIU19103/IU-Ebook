import JwtLoginView from '@/sections/auth/jwt-login-view';
import React from 'react';
export const metadata = {
  title: 'IUH-Ebook - Login',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      // url: '/favicon/favicon-16x16.png',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      // url: '/favicon/favicon-32x32.png',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      // url: '/favicon/apple-touch-icon.png',
      url: '/favicon/favicon.ico',
    },
  ],
};

export default function pageLogin() {
  return <JwtLoginView />;
}
