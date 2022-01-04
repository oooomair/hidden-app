import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom'
import { ThemeProvider } from './context/theme';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
