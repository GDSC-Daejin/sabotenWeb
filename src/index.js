import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles'
import "./assets/tailwind.css"

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
        <GlobalStyles />
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </BrowserRouter>
  // </React.StrictMode>
);
