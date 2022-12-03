import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />  
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

