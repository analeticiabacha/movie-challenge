import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle';
import MyRoutes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyRoutes/>
    <GlobalStyle/>
  </>
);
