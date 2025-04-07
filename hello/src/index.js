import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

// Handle redirect from 404.html
if (window.sessionStorage.redirect) {
    const redirect = window.sessionStorage.redirect;
    delete window.sessionStorage.redirect;
    window.history.replaceState(null, null, redirect);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);