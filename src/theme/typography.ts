import { Inter, Philosopher, Bitter} from 'next/font/google';

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }
}
export const primaryFont = Philosopher({
  weight: ['400',  '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
export const secondaryFont = Bitter({
  weight: ['400',  '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontFamilySecondary: secondaryFont.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,

  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
} as const;
