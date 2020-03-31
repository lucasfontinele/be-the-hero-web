import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import Routes from './routes';
import GlobalStyle from './theme/global';

function App() {
  return (
    <>
      <ToastProvider>
        <Routes />
        <GlobalStyle />
      </ToastProvider>
    </>
  );
}

export default App;
