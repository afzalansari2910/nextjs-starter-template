'use client';
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from '@/features/auth/context/AuthContext';
import { QUERY_STALE_TIME } from '@/lib/constants';
import { theme } from './theme';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('pt-br');
dayjs.tz.setDefault('America/Sao_Paulo');

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: QUERY_STALE_TIME, // 5 minutes
      },
    },
  });

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MantineProvider theme={theme} defaultColorScheme="auto">
            <DatesProvider settings={{ locale: 'pt-br' }}>
              <ModalsProvider>
                <Notifications position="top-right" />
                {children}
              </ModalsProvider>
            </DatesProvider>
          </MantineProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
