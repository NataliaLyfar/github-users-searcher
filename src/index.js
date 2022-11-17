import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { App } from 'App';
import { GlobalStyle } from 'styleConfig/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styleConfig/theme';
import 'antd/dist/antd.min.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/github-users-searcher/">
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>
);
