import ThemeProvider from '@/theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IU-Ebook',
    description: 'Web Frontend',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (

        <ThemeProvider>{children}</ThemeProvider>
    );
}
