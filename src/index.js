import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PhoneNavigationProvider } from './context/phone-navigation.context';
import { NavigationScrollToProvider } from './context/navigation-scroll.context';
import { SignInProvider } from './context/signin.context';
import { PropDataFetchProvider } from './context/properties-data.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SignInProvider>
      <PropDataFetchProvider>
        <NavigationScrollToProvider>
          <PhoneNavigationProvider>
          <App />
          </PhoneNavigationProvider>
        </NavigationScrollToProvider>
      </PropDataFetchProvider>
    </SignInProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
