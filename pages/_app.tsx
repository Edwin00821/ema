import '../styles/globals.css';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import store from 'redux/store';

import { ToastContainer, toastContainerConfig } from 'libs';

const MyApp: React.FC = ({
  Component,
  pageProps: { session, ...pageProps },
}: any) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Provider store={store}>
          <>
            <Component {...pageProps} />
            <ToastContainer {...toastContainerConfig} />
          </>
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
