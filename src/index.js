import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessagesProvider from "./contexts/MessagesProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MessagesProvider>
        <App />
    </MessagesProvider>
);
