import type { Metadata } from 'next';
import '../globals.css';
import ThemeRegistry from '@/app/frontend/services/provider/theme/ThemeRegistry';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { work_sans } from '@/app/frontend/services/provider/fonts/font';
import SnackBarAlert from '@/app/frontend/components/snackBarAlert/snackBarAlert';
import { AlertProvider } from '../contexts/alertContext';
import ClientSessionProvider from '../services/provider/session/clientSessionProvider';
import { auth } from '@/app/auth';

export const metadata: Metadata = {
  title: 'Revenue Assurance Platform',
  description: 'Revenue-Assurance-Platform'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${work_sans}`}>
        <div className="layout-container">
          <ClientSessionProvider session={session}>
            <AppRouterCacheProvider>
              <ThemeRegistry>
                <AlertProvider>
                  {children}
                  <SnackBarAlert />
                </AlertProvider>
              </ThemeRegistry>
            </AppRouterCacheProvider>
          </ClientSessionProvider>
        </div>
      </body>
    </html>
  );
}
