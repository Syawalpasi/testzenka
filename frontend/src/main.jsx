import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// Konfigurasi axios untuk menggunakan cookie
import axios from 'axios';
axios.defaults.withCredentials = true;

// Render aplikasi
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
