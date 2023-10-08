
import React from 'react';
import HomeView from '@/sections/home/home-view';

export const metadata = {
  title: 'IUH-Ebook',
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

export default function pageHome() {
  return <HomeView/>
}
