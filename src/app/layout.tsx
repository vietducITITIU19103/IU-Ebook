import ThemeProvider from '@/theme';
import { primaryFont } from '@/theme/typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IU-Ebook',
  description: 'Web Frontend',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" className={primaryFont.className} style={{ backgroundColor: "#F5F5FA" }}>
      <body style={{ minHeight: "100vh" }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>s
    </html>

  );
}
