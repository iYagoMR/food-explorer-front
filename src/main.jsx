import { Provider as ReduxProvider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth';

import theme from './styles/theme';
import { Routes } from './routes';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ReduxProvider store={store}>
        <AuthProvider>
            <Routes />
        </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>
)