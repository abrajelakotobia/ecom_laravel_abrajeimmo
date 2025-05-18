import { ThemeProvider } from '@/components/theme-provider';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

export default function GlobalLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Toaster richColors />
            {children}
        </ThemeProvider>
    );
}
