import AuthLayoutTemplate from '@/layouts/auth/auth-split-layout';
import GlobalLayout from './global-layout';

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <GlobalLayout>
            <AuthLayoutTemplate title={title} description={description} {...props}>
                {children}
            </AuthLayoutTemplate>
        </GlobalLayout>
    );
}
