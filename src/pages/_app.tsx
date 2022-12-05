import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { theme } from '../styles/theme';

if(process.env.NODE_ENV === 'development') {
    makeServer();
}

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
            <SidebarDrawerProvider>
                <Component {...pageProps} />  
            </SidebarDrawerProvider>
        </ChakraProvider>
    </QueryClientProvider>
  )
}

