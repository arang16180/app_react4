import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './context.js';
import App from './App';
import Home from './home';
import reportWebVitals from './reportWebVitals';

//const Route       = ReactRouterDOM.Route;
//const Link        = ReactRouterDOM.Link;
//const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>



<BrowserRouter>
<Routes>
    <Route index element={<Home />} />
    <Route path="a1" element={<App />} />
    <Route path="a2" element={<Home />} />
  
</Routes>
</BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
