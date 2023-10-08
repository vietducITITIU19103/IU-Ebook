
import React from 'react';
import HomeView from '@/sections/home/home-view';

export const metadata = {
  title: 'IUH-Ebook',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
  ],
};

export default function pageHome() {
  return <HomeView/>
}
