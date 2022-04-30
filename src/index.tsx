import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './chakratheme'
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const reactQueryOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
}

const queryClient = new QueryClient(reactQueryOptions);

root.render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
  </QueryClientProvider>

);
