import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CurrentMarkerProvider from './providers/CurrentMarkerProvider';
import ModalProvider from './providers/ModalProvider';
import EditFormModalProvider from './providers/EditFormModalProvider';
import ProfileModalProvider from './providers/ProfileModalProvider';
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nydse5mo.us.auth0.com"
      clientId='90eresyvb6kouGuBZldLEeNYKvXYgxjL'
      redirectUri={window.location.origin}
    >
    <EditFormModalProvider>
    <ModalProvider>
    <ProfileModalProvider>
    <CurrentMarkerProvider>
      <App />
    </CurrentMarkerProvider>
    </ProfileModalProvider>
    </ModalProvider>
    </EditFormModalProvider>
    </Auth0Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
